import React from 'react'
import { Upload, Icon, Modal } from 'antd';
import { getBase64 } from '../../lib/image'

class ImageUpload extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => {
    this.setState({ fileList })
  };


  uploadFile = async file => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'sickfits');
    const res = await fetch('https://api.cloudinary.com/v1_1/wesbostutorial/image/upload', {
      method: 'POST',
      body: data,
    });
    const newFile = await res.json();
    this.props.getUrlImage(newFile.url, file)
  };

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          beforeUpload={this.uploadFile}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default ImageUpload