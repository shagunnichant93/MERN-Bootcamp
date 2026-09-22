import { useState } from "react";

function App() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        city: "",
        email: "",
        address: ""
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/people", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            console.log(data);

            if (response.ok) {
                alert("Person saved successfully!");
                setFormData({
        name: "",
        age: "",
        city: "",
        email: "",
        address: ""
    });
            } else {
                alert("Failed to save person");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        }
    };

    return (
        <div>
            <h1>People Form</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name  </label>                    
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>              

                <div>
                    <label>Age     </label>                    
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>             

                <div>
                    <label>City  </label>                    
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>               

                <div>
                    <label>Email  </label>                    
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <div>
                    <label>Address  </label>                    
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <button type="submit">
                    Save Person
                </button>
            </form>
        </div>
    );
}

export default App;