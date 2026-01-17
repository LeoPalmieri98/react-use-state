import { useState } from "react"
import languages from "../components/languages.js"

function MyAccordion() {


    return (
        <div className="container mt-5">
            <div className="d-flex flex-wrap gap-4 mb-4">
                {languages.map(language => (
                    <button
                        key={language.id}
                        className="btn btn-primary"
                    >
                        {language.title}
                    </button>
                ))}
            </div>

            <div className="card">
                <h5 className="card-header card-title"></h5>
                <div className="card-body">
                    <p className="card-text"></p>
                </div>
            </div >
        </div >

    );
}

export default MyAccordion;
