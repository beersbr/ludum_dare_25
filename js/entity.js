function Entity(args)
{
	if(args == undefined)
		args = {};

	this.x = args.x || 0;
	this.y = args.y || 0;

	this.w = args.w || 0;
	this.h = args.h || 0;

	this.ax = args.ax || 0;
	this.ay = args.ay || 0;

	this.Update = function(elapsedTime, args)
	{
		return true;
	}

	this.Draw = function(rc)
	{
		return true;
	}

	this.IsCollidingWithAABB = function(entity)
	{
		if(entity.x > this.x+this.w)
			return false;
		if(entity.x+entity.w < this.x)
			return false;

		if(entity.y > this.y+this.h)
			return false;
		if(entity.y+entity.h < this.y)
			return false;

		return true;
	}

	this.IsCollidingWithAABB_box = function(x, y, w, h)
	{

		// console.log(x, y, w, h)
		// console.log(">", this.x, this.y, this.w, this.h);

		if(x > this.x+this.w)
		{
			return false;
		}

		if(x+w < this.x)
		{
			return false;
		}

		if(y > this.y+this.h)
		{
			return false;
		}

		if(y+h < this.y)
		{
			return false;
		}

		return true;
	}
}