import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Organizations = () => {
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
      fetch('https://mazingira105api.onrender.com/organizations')
        .then(response => response.json())
        .then(data => setOrganizations(data));
    }, []);
  
    return (
      <>
      
      {/* <div className="donate-container">
     </div> */}
      <div className="organization-container">
        <div className="organization-list">
          {organizations.map(organization => (
            <div className="organization-card" key={organization.id}>
              <img src={organization.image_url} alt={organization.name} />
              <h3>{organization.name}</h3>
              <p>{organization.description}</p>
              <p>Contact Information: {organization.contact_information}</p>
              <p>Status: {organization.status}</p>
              {organization.isAdminApproved && <p>Admin Approved</p>}
              <Link to={`/donate`} className="donate-button">
                Donate
              </Link>
            </div>
          ))}
        </div>
      </div>
      </>
    );
  }

export default Organizations;

// # Mapping of role names to role IDs
// def seed_roles():
//     role_data = [
//         {"name": "admin"},
//         {"name": "user"},
//         {"name": "organization"}
//     ]

//     for data in role_data:
//         role = Role(**data)
//         db.session.add(role)

//     db.session.commit()

//     users_data = [
//         {"user_name": "KinyuaA", "email": "alice.kinyua@fakemail.com", "password": "kinyuaSecure1!", "role": "user"},
//         {"user_name": "OtienoZ", "email": "zachary.otieno@fakemail.com", "password": "otienoZee123!", "role": "organization"},
//         {"user_name": "OkothP", "email": "paul.okoth@fakemail.com", "password": "okothPaul!987", "role": "admin"}
//     ]

   
//     for data in users_data:
//         existing_user = User.query.filter((User.user_name == data['user_name']) | (User.email == data['email'])).first()
//     if not existing_user:
//         role_id = role_data.get(data["role"].lower())
//         if role_id is not None:
//             data["role_id"] = role_id
//             user = User(**data)
//             db.session.add(user)
//         else:
//             print(f"Role not found for user: {data['user_name']}")
//     else:
//         print(f"User with name {data['user_name']} or email {data['email']} already exists.")

//     db.session.commit()