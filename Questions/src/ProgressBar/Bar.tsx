import styles from "./index.module.css";

interface IBarProps {
    isActive: Boolean,
    fill: number
}

const Bar= (props : IBarProps)=>{

    const{ fill} = props;
    

    

    return(

        <div className={styles.outer_bar}>
         <div className={styles.inner_bar} style={{width:`${fill}%`}}></div>
        </div>
    )
}

export default Bar