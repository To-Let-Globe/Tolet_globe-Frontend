// src/App.jsx
import React, { useState } from 'react';
import './App.css'; 
import Navbar from './components/Navbar/Navbar.jsx';
import Header from './components/Header/Header.jsx';
import PropertyForm from './components/PropertyForm/PropertyForm.jsx';
import Footer from './components/Footer/Footer.jsx';
import StepIndicator from './components/StepIndicator/Stepindicator.jsx';

function App() {
    const [currentStep, setCurrentStep] = useState(2);

    return (
        <div className="App">
            <Navbar />
            <Header />
            <main className="main-content">
                <StepIndicator currentStep={currentStep} />
                <PropertyForm />
            </main>
            <Footer />
        </div>
    );
}

export default App;
