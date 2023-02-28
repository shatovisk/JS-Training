let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[(styles.length - 1) % 2 == 0 ? (styles.length - 1) / 2 : Math.floor((styles.length - 1)/2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Рэгги");
