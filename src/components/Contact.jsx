// import React, { useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         "http://localhost:4000/api/v1/message/send",
//         {
//           name,
//           email,
//           subject,
//           message,
//         },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       toast.success(res.data.message);
//       setName("");
//       setEmail("");
//       setSubject("");
//       setMessage("");
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong!");
//     }
//   };

//   return (
//     <div className="contact container">
//       <div className="banner">
//         <div className="item">
//           <h4>Address</h4>
//           <p>Mullana, Ambala, Near MMDU university 133207</p>
//         </div>
//         <div className="item">
//           <h4>Call Us</h4>
//           <p>Call Us: +91 6202902433</p>
//         </div>
//         <div className="item">
//           <h4>Mail Us</h4>
//           <p>rajputprince58082@gmail.com@gmail.com</p>
//         </div>
//       </div>

//       <div className="banner">
//         <div className="item">
// <iframe
//   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13741.956285797574!2d77.0090952!3d30.0976251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ec273fc7d9d7f%3A0x6b9ce3d611999460!2sMullana%2C%20Haryana%20133503!5e0!3m2!1sen!2sin!4v1720112420760!5m2!1sen!2sin"
//   width="100%"
//   height="450"
//   style={{ border: 0 }}
//   allowFullScreen=""
//   loading="lazy"
//   referrerPolicy="no-referrer-when-downgrade"
// />


//         </div>

//         <div className="item">
//           <form onSubmit={handleSendMessage}>
//             <h2>CONTACT</h2>
//             <div>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <input
//                 type="email"
//                 placeholder="E-mail"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <input
//               type="text"
//               placeholder="Subject"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//             />
//             <textarea
//               rows={10}
//               placeholder="Message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//             <button type="submit">Send</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import API_BASE_URL from "../config";   // ✅ Import backend URL

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/v1/message/send`,   // ✅ dynamic URL
        { name, email, subject, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(res.data.message);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="contact container">
      <div className="banner">
        <div className="item">
          <h4>Address</h4>
          <p>Mullana, Ambala, Near MMDU university 133207</p>
        </div>
        <div className="item">
          <h4>Call Us</h4>
          <p>Call Us: +91 6202902433</p>
        </div>
        <div className="item">
          <h4>Mail Us</h4>
          <p>rajputprince58082@gmail.com</p>
        </div>
      </div>

      <div className="banner">
        <div className="item">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13741.956285797574!2d77.0090952!3d30.0976251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ec273fc7d9d7f%3A0x6b9ce3d611999460!2sMullana%2C%20Haryana%20133503!5e0!3m2!1sen!2sin!4v1720112420760!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="item">
          <form onSubmit={handleSendMessage}>
            <h2>CONTACT</h2>
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              rows={10}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
