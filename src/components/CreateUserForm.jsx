import { useState } from "react"

const CreateUserForm = ({formData, addUser}) => {

    const [formValues, setFormValues] = useState({})

    const handleChange=(e)=>{
        setFormValues({
            ...formValues, [e.target.name]: e.target.value
        });
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        addUser(formValues);
        setFormValues({});
    }

  return (
    <div>
        <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-xl shadow-md flex gap-3 flex-wrap"
        >
            {formData.map((formfields)=>(
                <input 
                key={formfields.id}
                type={formfields.type}
                name={formfields.name}
                placeholder={formfields.placeholder}
                value={formValues[formfields.name] || ""}
                onChange={handleChange}
                className='border p-2 rounded-md' 
                />
            ))}
            
            <button
            type='submit'
            className='bg-[#213448] text-white px-4 py-2 rounded-md'
            >Add User Details</button>
        </form>
    </div>
  )
}

export default CreateUserForm