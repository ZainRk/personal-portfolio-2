import React from "react";
import { workExp } from "../../utils/data";
import css from "./Work.module.scss";
import {motion} from 'framer-motion'
import { draw } from "../../utils/motion";
const Work = () => {
  return (
    <motion.section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth flexCenter ${css.container}`}>
        {/* heading */}
        <span className="primaryText yPaddings">My Work Experience</span>

        <div className={`flexCenter ${css.experiences}`}>
          {workExp.map((exp, i) => {
            return (
              <div key={i} className={`flexCenter ${css.exp}`}>
                <div className={css.post}>
                  <h1>{exp.place}</h1>
                  <p>{exp.tenure}</p>
                </div>
                <div className={css.role}>
                  <h1>{exp.role}</h1>
                  <p>{exp.detail}</p>
                </div>
              </div>
            );
          })}


          <div className={css.progressbar}>
            <motion.div variants={draw} className={css.line}></motion.div>
            <div><div className={css.circle} style={{background: "#286F6C"}}></div></div>
            <div><div className={css.circle} style={{background: "#F2704E"}}></div></div>
            <div><div className={css.circle} style={{background: "#EEC048"}}></div></div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Work;
