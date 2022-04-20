import { Button, Form, Input, InputNumber, Modal, Select } from "antd";
import React, { useContext, useState } from "react";
import { postsContext } from "../../contexts/PostsContext";

const AddPost = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { createPost } = useContext(postsContext);

  const [img, setImg] = useState(null);
  function save(newPost) {
    console.log(newPost);
    createPost({
      ...newPost,
      image: img,
    });
    setIsModalVisible(false);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Button
        style={{
          backgroundColor: "#041E3A",
          color: "white",
        }}
        onClick={showModal}
      >
        Add Product
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout="vertical" name="basic" onFinish={save}>
          <Form.Item
            label="title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input title!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="category"
            name="category"
            rules={[
              {
                required: true,
                message: "Please input category!",
              },
            ]}
          >
            <Select>
              <Select.Option value="Nedvijimost">Nedvijimost</Select.Option>
              <Select.Option value="sport">sport</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="text"
            name="text"
            rules={[
              {
                required: true,
                message: "Please input text!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Input
            placeholder="Option of image"
            onChange={(e) => setImg(e.target.files[0])}
            type="file"
          />

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddPost;
