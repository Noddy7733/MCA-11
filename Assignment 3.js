class Stack
{
	constructor(items)
	{
		this.items =[] ;
	}
	
	add(elem)
	{
		this.items.push(elem);
	}
	
	remove()
	{
		if(this.items == 0 )
			console.log("underflow");
		else
			return this.items.pop();
		
		
	}
	
	disp()
	{
		var str = "";
		for(let i = 0 ; i < this.items.length ; i++)
		{
			str += this.items[i]+" " ;
		}
		console.log(str);
	}
	rev()
	{
		var str = "" ;
		for(let i = this.items.length-1 ; i >= 0 ;i--)
			str += this.items[i]+" " ;
		return str;
	}
	
	isEmpty()
	{
		if(this.items.length > 0 ) return false ;
		else return true ;
	}
	
}

function reversed(str)
{
	let stack = new Stack() ;
	let i = 0 ;
	let revsed = "" ;
	
	while(i !== str.length)
	{
		stack.add(str.charAt(i));
		i++;
	}
	
	while(!stack.isEmpty())
	{
		revsed += stack.remove();
	}
	
	return revsed;
}

const str = "Arshad sayyad" ;
console.log(str);

console.log(reversed(str));

var s = new Stack();

s.add(10) ;
s.add(20) ;
s.add(30) ;



s.disp();
console.log(s.rev());

console.log("after deletion");

s.remove();
s.remove();
s.remove();
s.remove();

s.disp();
