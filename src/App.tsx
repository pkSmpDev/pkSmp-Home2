import { motion } from 'motion/react';
import { useState, type ReactElement } from 'react';
import "./Style/Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartArea, faCircleNodes, faHexagonNodesBolt } from "@fortawesome/free-solid-svg-icons";
import { faClock, faCloud } from "@fortawesome/free-regular-svg-icons";
const App=():ReactElement=>{
  return(<>
    <motion.header>
      <motion.div className='titleWrapper'>
        <motion.h1>
          Modern<br/>Minecraft<span>,</span><br/>
        </motion.h1>
        <span className="s">Universally Available</span>
      </motion.div>
      {/* <motion.h1 className='items'>ab<br/>cd</motion.h1> */}
      <motion.div className='fade'></motion.div>
    </motion.header>
    <motion.section className='s2'>
      
    </motion.section>
  </>);
}
export default App;