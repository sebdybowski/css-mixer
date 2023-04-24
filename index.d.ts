interface ObjectClass {
    [key: string]: boolean;
}
type ArrayClass = [string[]];
type Classes = string[] | ObjectClass[] | ArrayClass;
declare const mixer: (...classes: Classes) => string;
export default mixer;
