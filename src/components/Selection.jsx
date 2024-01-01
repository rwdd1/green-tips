import data from "../data/tips"

const set = new Set();
const themes = data.forEach( item => set.add(item.theme) );

function generateRandomTip(theme) {
    const filtered = data.filter( item => item.theme === theme );
    return filtered[Math.floor(Math.random() * filtered.length)];
}

export default function Selection({ toggleTip }) {
    function handleSelectionClick(theme) {
        toggleTip(generateRandomTip(theme));
    }

    return (
        <ul
        className="primary-section selection"
        >
            {
            Array.from(set).map( item => {
                return (
                    <li
                    key={item}
                    className="selection-item"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") handleSelectionClick(item)
                    }}
                    onClick={() => handleSelectionClick(item)}
                    >
                    {item}
                    </li>
                )
            })
            }
        </ul>
    )
}