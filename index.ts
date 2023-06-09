interface ObjectClass {
  [key: string]: boolean;
}

type Classes = (boolean | string | string[] | ObjectClass)[];

const mixer = (...classes: Classes): string => {
  let classList: string[] = [];

  classes.forEach((cssClass) => {
    if (null || undefined) return;

    if (typeof cssClass === "string") {
      classList.push(cssClass);
    }

    if (cssClass instanceof Object) {
      for (const [key, value] of Object.entries(cssClass)) {
        if (value) classList.push(key);
      }
    }

    if (Array.isArray(cssClass)) {
      classList = [...classList, ...cssClass];
    }
  });

  return classList.join(" ");
};

export default mixer;
