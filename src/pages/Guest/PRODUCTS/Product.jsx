import { useState } from "react";

export default function Product(){
    const [habits, setHabits]=useState([
        id: 1,
        title:'Code for 60 Minutes',
        streak: '12 day streak',
        completed: true,
        icon: '</>',

        id: 2,
        title:'Read 20 Pages',
        streak: '8 day streak',
        completed: true,
        icon: 's',
    ])
    return(
        <>
        <section className="Product-preview">
            <div>
                
            </div>
        </section>
        </>
    );





    // <section className="product-preview" id="product">
    //     <div className="preview-glow"></div>
    //     <div className="preview-frame">
    //     <div className="preview-side"><Logo/><div className="preview-nav"><b><Icon name="home"/>Overview</b><span><Icon name="check"/>My Habits</span><span><Icon name="calendar"/>Calendar</span><span><Icon name="chart"/>Insights</span></div></div>
    //     <div className="preview-main">
    //         <div className="preview-top"><div><small>WEDNESDAY, MAY 21</small><h2>Good morning, Vyke.</h2></div><span className="avatar">VK</span></div>
    //         <div className="preview-grid"><div className="preview-progress"><ProgressRing value={72}/><div><small>TODAY'S PROGRESS</small><b>Keep your momentum.</b><span>3 of 5 habits complete</span></div></div><div className="mini-stat"><small>CURRENT STREAK</small><strong>16 <span>days</span></strong><div className="mini-bars">{[3,5,4,7,8,6,9].map((h,i)=><i key={i} style={{height:h*4}}></i>)}</div></div></div>
    //         <div className="preview-habits"><div className="section-row"><b>Today's habits</b><small>3 remaining</small></div>{initialHabits.slice(0,3).map(h=><div className="preview-habit" key={h.id}><span className={`check ${h.done?'checked':''}`}>{h.done && <Icon name="check" size={13}/>}</span><span className="habit-icon"><Icon name={h.icon}/></span><div><b>{h.name}</b><small>{h.category} · {h.time}</small></div><span className="streak">{h.streak} day streak</span></div>)}</div>
    // </div>
    //     </div>
    // </section>
    }

    123