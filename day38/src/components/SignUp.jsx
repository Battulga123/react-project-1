export default function SignUp () {
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            alert('submitting')
            }}>
            <input/>
            <button>Send</button>
        </form>
    )
}