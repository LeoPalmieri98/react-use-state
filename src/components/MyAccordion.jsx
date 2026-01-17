import { useState } from "react"
import languages from "../components/languages.js"

function MyAccordion() {
    return (
        <div className="container mt-5">
            {languages.map(language => {
                return (
                    <div key={language.id} className="mb-4">
                        <button className="btn btn-primary mb-2">
                            {language.title}
                        </button>

                        <div className="card">
                            <h5 className="card-header card-title"></h5>
                            <div className="card-body">
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default MyAccordion