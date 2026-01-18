import { useState } from "react"
import languages from "../components/languages.js"

function MyAccordion() {

    const [selectedLanguage, setSelectedLanguage] = useState(0);

    function toggleMyAccordion(event) {
        console.log(event)
        setSelectedLanguage(event);
    }
    return (
        <div className="container mt-5">
            <div className="d-flex flex-wrap gap-4 mb-4">
                {languages.map((language, index) => (
                    <button key={language.id} onClick={() => { toggleMyAccordion(index) }}
                        className={`btn ${selectedLanguage === index ? "btn-warning" : "btn-primary"}`}>
                        {language.title}
                    </button>
                ))}
            </div>

            {selectedLanguage !== null && (
                <div className="card">
                    <h5 className="card-header card-title">
                        {languages[selectedLanguage].title}
                    </h5>
                    <div className="card-body">
                        <p className="card-text">
                            {languages[selectedLanguage].description}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MyAccordion;
