import react from 'react';

const Policy = () => {
    return (
        <>
        <div className="policy-container">
          <div className="policy-top">
            <h1>Welcome <br />to <br />UTKAL SOP & POLICIES</h1>
            <button type='button' onClick={() => window.location.hash = '/'} className='back-btn'>Home Page</button>
          </div>
          <div className="department-buttons">
            <button type="button" className="it-btn" onClick={() => window.location.hash = '/department/it'}>Information Technology</button>
            <button type="button" className="cssd-btn" onClick={() => window.location.hash = '/department/cssd'}>CSSD</button>
            <button type="button" className="hr-btn" onClick={() => window.location.hash = '/department/hr'}>HUMAN RESOURCES</button>
            <button type="button" className="finance-btn" onClick={() => window.location.hash = '/department/finance'}>Finance</button>
            <button type="button" className="nursing-btn" onClick={() => window.location.hash = '/department/nursing'}>Nursing</button>
            <button type="button" className="pharmacy-btn" onClick={() => window.location.hash = '/department/pharmacy'}>Pharmacy</button>
            <button type="button" className="radiology-btn" onClick={() => window.location.hash = '/department/radiology'}>Radiology</button>
            <button type="button" className="laboratory-btn" onClick={() => window.location.hash = '/department/laboratory'}>Laboratory</button>
            <button type="button" className="maintenance-btn" onClick={() => window.location.hash = '/department/maintenance'}>Maintenance</button>
          </div>
        </div>
        </>
    )
}
export default Policy;