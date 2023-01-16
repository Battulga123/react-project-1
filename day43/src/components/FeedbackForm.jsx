
import { useState } from 'react'

export default function FeedbackForm() {

    const [text, setText] = useState('')
    const [isSending, setIsSending] = useState(false)
    const [isSent, setIsSent] = useState(false)

    async function handesubmit(e) {
        e.preventDefault()
        setIsSending(true)
        await setMessage(text)
        setIsSending(false)
        setIsSent(true)
    }

    if (isSent) {
        return <h1>Thanks for feedback</h1>
    }

    function setMessage(text) {
        return new Promise(resolve => {
            setTimeout(resolve, 2000);
        });
    }

    return (
        <form onSubmit={handesubmit}>
            <p>Insert text</p>
            <textarea value={text}
                onChange={e => setText(e.target.value)}
            >
            </textarea>
            <br />
            <button>Click</button>
            {isSending && <p>Sending....</p>}
        </form>
    )
}