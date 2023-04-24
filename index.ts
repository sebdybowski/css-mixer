type ObjectClass = {
	[key:string]: boolean
};

type Classes =  string[] | [string[]] | ObjectClass[];

const mixer = (...classes: Classes): string => {
	let classList: string[] = [];

	classes.forEach(cssClass => {
		if (typeof cssClass === 'string') {
			classList.push(cssClass);
		}

		if (cssClass instanceof Object) {
			for(const [key, value] of Object.entries(cssClass)) {
				if (value) classList.push(key);
			}
		}

		if (cssClass instanceof Array) {
			classList = [...classList, ...cssClass];
		}
	})

	return classList.join(' ');
};

export default mixer;