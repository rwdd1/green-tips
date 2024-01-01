export default function Tip({ toggleTip, currentTip }) {
    const randomBackground = `https://source.unsplash.com/random/?${currentTip.theme}`
    console.log(randomBackground)
    return (
        <article
        key={currentTip.id}
        className="tip primary-section"
        style={{
            background: "rgba(4, 4, 4, 0.4) url('" + randomBackground + "') center/cover no-repeat",
            backgroundBlendMode: "multiply"
        }}>
            <h1>#{currentTip.id}</h1>
            <p>{currentTip.tip}</p>
            <button
            type="button"
            className="close-button"
            onClick={() => toggleTip(null)}
            >
            Close
            </button>
        </article>
    )
}