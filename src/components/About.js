import React from "react";
import "./About.css"
export const About = () => {
  return (
    <>
      
        <div className="card bg-primary-subtle justify-content-left align-items-left">
          <div className="card-body">
            <h2 id="head">About Our Toursim Sector - VIDYA</h2>
            <p className="para">
              Our primary focus is to tourism, the act and process of spending time away from home in pursuit of recreation, relaxation, and pleasure, while making use of the commercial provision of services. As such, tourism is a product of modern social arrangements, beginning in western Europe in the 17th century, although it has antecedents in Classical antiquity.

Tourism is distinguished from exploration in that tourists follow a “beaten path,” benefit from established systems of provision, and, as befits pleasure-seekers, are generally insulated from difficulty, danger, and embarrassment. Tourism, however, overlaps with other activities, interests, and processes, including, for example, pilgrimage. This gives rise to shared categories, such as “business tourism,” “sports tourism,” and “medical tourism” international travel undertaken for the purpose of receiving medical care.
            </p>
            <form>
                <h3 className='text-center'>Any Questions...</h3>
                <div className='mb-3'>
                    <label htmlFor='text'>Name</label>
                    <input type='text' placeholder='Enter your name' className='form-control' name='text'/>
                    </div>
                    <div className='mb-3'>
                    <label htmlFor='text'>Your Consern</label>
                    <input type='text' placeholder='Enter your consern' className='form-control' name='text'/>
                </div>
                <div>
                    <input type='checkbox' className='custom-control custom-checkbox'/>
                    <lable htmlFor="checkbox" className="ms-1">Remember me</lable>
                </div>
              
            </form>
          </div>
          <div className="card-footer d-grid">
          <button type="submit" className="btn btn-primary mb-4">Submit</button>
          </div>
        </div>
    
    </>
  );
};
export default About;