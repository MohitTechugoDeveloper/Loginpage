import React from 'react'
import { confirmAlert } from 'react-confirm-alert';
import { MdDelete } from "react-icons/md";
// import toast, { Toaster } from 'react-hot-toast';
import { toast } from 'react-toastify';

const Deleteproduct = ({ data, onDelete }) => {
  // const [newlist,setnewlist]=useState([]);
// console.log(data);
// console.log(onDelete);
  // const notify= () => toast.success('Item deleted');
  const deleteItem = async () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            fetch(`https://dummyjson.com/products/${data.id}`, {
              method: 'DELETE',
            })
            .then(res => res.json())
            .then(()=>{
              onDelete(data.id);
              // notify()
              toast.success("Deleted",{
                position: "top-center"
              })
            })
          }
        },
        {
          label: 'No',
          onClick: () => toast.info("Deleted Cancel", {
            position: "top-center"
          })
        }
      ]
    });
  };

  return (
    <>
      <span className='btnspan'> <MdDelete onClick={deleteItem} /></span>
      </>
      
  )
}

export default Deleteproduct