interface ObjectClass {
    [key: string]: boolean;
}
type Classes = (boolean | string | string[] | ObjectClass)[];
declare const mixer: (...classes: Classes) => string;
export default mixer;
