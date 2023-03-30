import calculator from './images/icon-calculator.svg';
import karma from './images/icon-karma.svg';
import supervisor from './images/icon-supervisor.svg';
import teamb from './images/icon-team-builder.svg';

import './App.scss';

function App() {
  return (
    <section className='four-cards'>
      <article className='fc-card-header g1'>
        <h1>Reliable, efficient delivery</h1>
         <h2>Powered by Technology</h2>
        <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
      </article>
      
      <article className='fc-card-main g2'>
        <hr id='green'></hr>
        <section className='fc-card'>
          <summary>Supervisor</summary>
        <p>Monitors activity to identify project roadblocks</p>
        <div className='fc-card-icon'>
          <img src={supervisor} alt=''/>
        </div>
        </section>
      </article>
      
      <article className='fc-card-main g3'>
        <hr id='red'></hr>
        <section className='fc-card'>
          <summary>Team Builder</summary>
          <p>Scans our talent network to create the optimal team for your project</p>
          <div className='fc-card-icon'>
           <img src={teamb} alt=''/>
          </div>
        </section>
      </article>

      <article className='fc-card-main g4'>
        <hr id='orange'></hr>
        <section className='fc-card'>
          <summary>  Karma</summary>
        <p>Regularly evaluates our talent to ensure quality</p>
        <div className='fc-card-icon'>
          <img src={karma} alt=''/>
        </div>
        </section>
      </article>
      
      <article className='fc-card-main g5'>
        <hr id='blue'></hr>
        <section className='fc-card'>
          <summary>Calculator</summary>
          <p>Uses data from past projects to provide better delivery estimates</p>
          <div className='fc-card-icon'>
            <img src={calculator} alt=''/>
          </div>
        </section>  
      </article>
    </section>
  );
}

export default App;
