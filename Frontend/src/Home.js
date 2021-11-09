import dp from './imgs/download.png';
import pdf1 from './pdfs/Netcampus Certificate - PL-100-Ridhaa Hendricks.pdf';
import pdf2 from './pdfs/Netcampus Certificate - PL-200-Ridhaa Hendricks.pdf';
import pdf3 from './pdfs/Netcampus Certificate - PL-900-Ridhaa Hendricks.pdf';

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Home = () => {

    return (
        <div className="middle">
            <div className="about-me">
                <h1>Ridhaa Hendricks</h1>
                <div className="image">
                    <img src={dp} alt="Profile_Picture" />
                </div>
                <div className="intro">
                    <p>
                        I have always been fascinated with technology since a young age. Finding an interest in becoming a developer was
                        an easy decision and this gave me a great knowledge and understanding about the concepts of programming.
                    </p>
                    <p>
                        Always willing to learn and improve my skills in all aspects of being a developer. I am a Test Automation Developer, however I have a
                        great fondness with web development where I am currently learning MERN stack.
                    </p>
                </div>
            </div> { /* end of about-me */}

            <div className="personal-details">
                <h1>Achievements & Experience</h1>
                <div className="details">
                    <h2>Employment</h2>
                    <p>
                        I am currently employed at MiX Telematics as a Learner: Test Automation Developer,
                        where I use Java with Selenium to run, debug, fix, and create automation tests.
                    </p>
                    <h2>Academics</h2>
                    <p>
                        I received top achiever for my final year in Information Technology Course at False Bay College.
                        I have graduated at Cape Peninsula University of Technology where I completed a
                        Diploma in Information and Communications Technology Application Development.
                    </p>
                    <h2>Additional Practices</h2>
                    <p>
                        I am currently learning MongoDB, ExpressJS, ReactJS, and NodeJS on the side,
                        as I have a great fondness for web development and would like to pursue a career in web development.
                        I am building a practice website using MERN stack, I have a current incomplete e-commerce website on GitHub.
                    </p>
                </div>
            </div> { /* end of personal-details */}

            <div className="additional-achievements">
                <h1>Additional Achievements</h1>
                <div className="documents">
                    <p>Microsoft: PL-100 Power Platform App Maker</p>
                    <Document file={pdf1} className="pdfs">
                        <Page pageNumber={1} className="page" renderTextLayer={false} renderInteractiveForms={false} width={385} height={385} />
                    </Document>
                </div>
                <div className="documents">
                    <p>Microsoft: PL-200 Power Platform Functional Consultant</p>
                    <Document file={pdf2} className="pdfs">
                        <Page pageNumber={1} className="page" renderTextLayer={false} renderInteractiveForms={false} width={385} height={385} />
                    </Document>
                </div>
                <div className="documents">
                    <p>Microsoft: PL-900 Power Platform Fundamentals</p>
                    <Document file={pdf3} className="pdfs">
                        <Page pageNumber={1} className="page" renderTextLayer={false} renderInteractiveForms={false} width={385} height={385} />
                    </Document>
                </div>
            </div> { /* end of future-goals */}
        </div>
    );
}

export default Home;