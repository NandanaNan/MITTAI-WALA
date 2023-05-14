import { Button, Modal, Input } from 'antd';
import { useState } from 'react';
const CreateProduct = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState({name:"", price:""})
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    props.createProduct(data);
    setData({name:"", price:""})
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (e, label) => {
    setData({...data, [label]: e.target.value})
  }
  return (
    <>
      <Button type="primary m-1" onClick={showModal}>
        Add Items
      </Button>
      <Modal title="Add name & number of sweets needed " open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Input value={data.name} className='m-1' onChange={(e)=>onChange(e, "name")}/>
            <Input value={data.price} className='m-1' type="number" onChange={(e)=>onChange(e, "price")}/>
      </Modal>
    </>
  );
};
export default CreateProduct;