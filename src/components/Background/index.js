import React from "react";

import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function Background({ children }){
    const { secundary, secundary85, secundary75} = theme.colors;
    return(
        <LinearGradient
            style={styles.container}
            colors={[secundary, secundary85, secundary75]}
        >
            {children}
        </LinearGradient>
    )
}