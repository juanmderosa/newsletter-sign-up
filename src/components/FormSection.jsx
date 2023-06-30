import { useEffect, useState } from "react"


export const FormSection = ({setFormOk}) => {
    const [form, setForm] = useState("");
    const [error, setError] = useState(null);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = () =>{
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)

        return () => {
        window.removeEventListener("resize", handleResize)
        }
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        if(!form || !regexEmail.test(form)){
            setError(true)
            setFormOk(false)
        }else{
            setError(false)
            setFormOk(true)
        }
    }

    const handleChange = (e) =>{
        setForm(e.target.value)
    }
  return (
    <>
        <section className="form-section main-section">
            <h1 className="title-h1">Stay updated!</h1>
            <h2 className="title-h2">Join 60,000+ product managers receiving monthly updates on:</h2>
            <ul className="ul-list">
                <li className="li-item"><span><img src="images/icon-list.svg"></img></span>Product discovery and building what matters</li>
                <li className="li-item"><span><img src="images/icon-list.svg"></img></span>  Measuring to ensure updates are a success</li>
                <li className="li-item"><span><img src="images/icon-list.svg"></img></span>And much more!</li>
            </ul>
            <article>
                <aside className="labels">
                    <p className="form-title">Email address</p>
                    {error && <p className="error-p">Valid e-mail required</p>}
                    
                </aside>
                <form className="form-container" onSubmit={handleSubmit}>
                    <input className={error ? "form-error" : "form-input"} type="text" placeholder="email@company.com" value={form} onChange={handleChange} />
                    <button type="submit" className="btn form-btn">Subscribe to monthly newsletter</button>
                </form>
            </article>
        </section>
        <section className="img-section main-section">
            <img src={width >= 900 ? "images/illustration-sign-up-desktop.svg" : "images/illustration-sign-up-mobile.svg" }></img>
        </section>
    </>
    
  )
}
