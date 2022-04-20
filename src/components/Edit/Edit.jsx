import { Button, Form, Input, Select } from "antd";
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postsContext } from "../../contexts/PostsContext";

const Edit = () => {
  const { getOnePost, upDatePost, onePosts } = useContext(postsContext);
  const params = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    getOnePost(params.id);
  }, []);

  useEffect(() => {
    form.setFieldsValue(onePosts);
  }, [onePosts]);
  console.log("onePosts", onePosts);
  function save(editedPost) {
    console.log(editedPost);
    upDatePost(params.id, editedPost);
    navigate("/list");
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form
        style={{ width: "60%" }}
        layout="vertical"
        name="basic"
        onFinish={save}
        form={form}
      >
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
        <Form.Item style={{ marginTop: "15px" }}>
          <Button type="primary" htmlType="submit">
            Change
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Edit;
