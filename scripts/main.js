
first = true
selection = document.getElementById("selection")

function Generate()
{
	//do this if it isn't the first run
	if (first == false)
	{
		for (i = 0; i < amount; i++)
		{
			//reset all bars
			document.getElementById("selection").removeChild(div[i]);
		}

		for (i = amount; i < amount*2; i++)
		{
			//reset all bars
			document.getElementById("bubble").removeChild(div[i]);
		}
	}

	//reset arrays and vars
	div = [];
	sI = 0;
	bI = 0;
	highest = 0;
	randomNum = [];
	s = 0;
	b = 0;
	timeSelection = 0;
	timeBubble = 0;

	//get amount of bars from slider
	amount = parseInt(document.getElementById("barAmount").value)

	//generate random nums
	for (k = 0; k < amount; k++)
	{
		randomNum[k] = Math.floor(Math.random() * 540);
	}

	//create bars
	//SELECTION-----------------------------------------------------------------
	for (i = 0; i < amount; i++)
	{
		div[i] = document.createElement("div");
		div[i].classList.add('boxes');

		//generates random height
		div[i].style.height = randomNum[sI] + "px";

		//checks if highest
		if (randomNum[sI] > highest)
		{
			highest = randomNum[sI];
		}

		sI++;
		div[i].style.width = 860 / amount - 4 + "px";
		document.getElementById("selection").appendChild(div[i]);
	}

	//BUBBLE-----------------------------------------------------------------------------------
	for (i = amount; i < amount*2; i++)
	{
		div[i] = document.createElement("div");
		div[i].classList.add('boxes');

		//generates random height
		div[i].style.height = randomNum[bI] + "px";

		//checks if highest
		if (randomNum[bI] > highest)
		{
			highest = randomNum[bI];
		}

		bI++;
		div[i].style.width = 860 / amount - 4 + "px";
		document.getElementById("bubble").appendChild(div[i]);
	}

	//updates rooves
	document.getElementById("sRoof").style.height = 539 - highest + "px";
	document.getElementById("bRoof").style.height = 539 - highest + "px";

	//updates bool so that program knows it isn't first attempt
	first = false;
}

function Run()
{
	Selection();
	Bubble();
}

function Selection()
{
	setTimeout(function()
	{
		//get lowest number
		sComplete = true;
		selectionLow = 999;
		selectionLowBar = 0;

		//check if done
		for(c1 = 0; c1 < amount-1; c1++)
		{
			if(parseInt(div[c1].style.height) > parseInt(div[c1+1].style.height))
			{
				sComplete = false;
			}
		}

		if(sComplete == true)
		{
			document.getElementById("sTime").innerHTML = "Selection: " + timeSelection / 1000 + " seconds";
		}
		else
		{
			for (e = s; e < amount; e++)
			{
				sNum = parseInt(div[e].style.height);
				if (sNum < selectionLow)
				{
					selectionLow = sNum;
					selectionLowBar = e;
				}
			}

			//timing
			timeSelection += 25;
			div[selectionLowBar].style.height = parseInt(div[s].style.height) + "px";
			div[s].style.height = selectionLow + "px";
			s++;
			Selection();


		}

	}, 25);

}

function Bubble()
{
	setTimeout(function()
	{
		bComplete = true;

		for(c2 = amount; c2 < amount*2-1; c2++)
		{
			if(parseInt(div[c2].style.height) > parseInt(div[c2+1].style.height))
			{
				bComplete = false;
			}
		}

		if(bComplete == true)
		{
			document.getElementById("bTime").innerHTML = "Bubble: " + timeBubble / 1000 + " seconds";
		}
		else
		{
			for(b = amount; b < amount*2-1; b++)
			{
				if (parseInt(div[b].style.height) > parseInt(div[b+1].style.height))
				{
					temp = div[b].style.height;
					div[b].style.height = div[b+1].style.height
					div[b+1].style.height = temp;
				}
			}

			timeBubble += 25;
			Bubble();
		}

	}, 25);
}


