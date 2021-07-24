# random_wiki

A simple Flask app that displays the title and intro of a random wikipedia article with a link to the full article. <br> 

![App image](/Images/rand_wiki.jpg)

## Demo
See a live version deployed on heroku [here](https://rand-wiki.herokuapp.com/)
![App Example](/Images/rand_wiki.gif)
## Run Locally

Clone the project

```bash
  git clone https://github.com/vaylon-fernandes/random_wiki.git
```

Go to the project directory

```bash
  cd random_wiki
```
 
Create a virtual enviroment. [Read more](https://realpython.com/python-virtual-environments-a-primer/)
Pipenv instructions [Docs](https://pipenv.pypa.io/en/latest/) <br> 
Use these instructions if you have pipenv
```bash
pipenv shell
```
This creates a virtual enviroment and activates it. <br>
Install Dependencies
```bash
pipenv install 
```
venv instructions
```bash 
  venv <environment name>
```
#### Note: Linux user might have to install venv using the following command

```bash
   apt-get install python3-venv
```
#### Activate the virtual environment 
On Linux:
```bash 
source venv/bin/activate
```
On Windows:
```bash
venv\Scripts\activate
```
Install dependencies

```bash
  pip install -r requirements.txt
```


#### Run command
```bash
flask run
```
This creates a simple server, go to `http://127.0.0.1:5000/` in your browser to view the site <br>
#### Debug mode 
To run the server in Debug mode, export the `FLAK_ENV` variable befor running `flask run`
Bash command 
```bash
  export FLASK_ENV=development
```
CMD command
```bash
  set FLASK_ENV=development
```
Powershell command
```powershell
  $env:FLASK_ENV="development"
```
Run command
```bash
flask run
```
Read more here: https://flask.palletsprojects.com/en/2.0.x/quickstart/#debug-mode

## Deploying to Heroku
- There's a good explanation of this given in this [repo](https://github.com/MirelaI/flask_heroku_example)
- Another good read on the topic is on the Real Python [website](https://realpython.com/flask-by-example-part-1-project-setup/) 

## Built with 
- HTML, CSS, Javascript
- [Flask](https://flask.palletsprojects.com/en/2.0.x/)
- [Beautiful Soup 4](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
- [Requests](https://docs.python-requests.org/en/master/) 
- [Javascript fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

## References
- Flask Docs - https://flask.palletsprojects.com/en/2.0.x/
- Beautiful Soup 4 Docs - (https://www.crummy.com/software/BeautifulSoup/bs4/doc/
- Requests Docs - https://docs.python-requests.org/en/master/
- Javascript fetch API - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
