import { useState, ChangeEvent, FormEvent  } from "react"
import { useParams } from "react-router-dom";
import movies from "./data"; 
import Footer from './components/Footer'


interface PaymentFormData {
  name: string
  cardNumber: string
  expiry: string
  cvv: string
}

function PaymentForm() {
  const [formData, setFormData] = useState<PaymentFormData>({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  })

  const [message, setMessage] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      formData.name.trim() !== "" &&
      formData.cardNumber.length === 16 &&
      formData.expiry.trim() !== "" &&
      formData.cvv.length === 3
    ) {
      setMessage("✅ Payment Successful!")
    } else {
      setMessage("❌ Please fill all fields correctly.")
    }
  }
  const { id } = useParams();
    const movie = movies.find(m => m.id === Number(id));

    if (!movie) {
        return <div style={{ color: "white" }}>Movie not found {id}</div>;
    }
  return (
    <div className="payment-container">
      <form className="payment-form" onSubmit={handleSubmit}>
        <h2>Payment Details</h2>
        <h2 style={{textAlign:"center"
        }}>{movie.title}</h2>
        <h2>{localStorage.getItem("date")}</h2>

        <input
          type="text"
          name="name"
          placeholder="Cardholder Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number (16 digits)"
          maxLength={16}
          value={formData.cardNumber}
          onChange={handleChange}
        />

        <div className="row">
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={formData.expiry}
            onChange={handleChange}
          />

          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            maxLength={3}
            value={formData.cvv}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Pay Now</button>

        {message && <p className="message">{message}</p>}
      </form>
      
    </div>
    
  )
}

export default PaymentForm