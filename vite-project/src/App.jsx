import { Button } from "@/components/ui/button"
import './App.css'
import CustomSidebar from "@/components/custom/customSidebar"
import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar"
import { GitHubLogoIcon, LinkedInLogoIcon, DownloadIcon } from '@radix-ui/react-icons'
import { Phone, Mail } from 'lucide-react'
import { useToast } from './hooks/use-toast'
import { ToastAction } from "@/components/ui/toast"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {
  var { toast } = useToast()

  const LinkedinButton = () => {
    const url = 'https://www.linkedin.com/in/miguel-malelang/'
    window.open(url, '_blank')
  }

  const GithubButton = () => {
    const url = 'https://www.github.com/pizzackz'
    window.open(url, '_blank')
  }

  const EmailButton = () => {
    window.location.href = 'mailto:miguellouis.lm@gmail.com'
  }

  const PhoneButton = () => {
    navigator.clipboard.writeText('+65 9824 5934');
    toast({
      description: "Phone number copied to clipboard",
      action: (<ToastAction>OK</ToastAction>)
    })
  }
  
  return (
    <>
      <SidebarProvider>
        <CustomSidebar />
        <SidebarInset>
        <div className="pt-4 p-10 m-20">
          <div className="flex flex-wrap items-start">
            <img 
              src={import.meta.env.BASE_URL + "./img/picture.jpeg"}
              style={{ height:'18rem' , maxHeight: '400px', borderRadius: '20px' }} 
              className="mr-10 mb-5 flex-shrink-0"
              alt="Picture"
            />
            <div className="scroll-m-20 flex-1">
              <h1 className="text-6xl font-extrabold tracking-tight lg:text-5xl" id='about-me'>
                Hello there, I'm Miguel!
              </h1>
              <h3 className="text-2xl font-semi tracking-tight first:mt-0 mt-6">
                I'm a Y2 student currently studying Cybersecurity and Digital Forensics at Nanyang Polytechnic. 
                I'm passionate about coming up with new, innovative ideas and transforming them into working solutions
                that solve real world problems.
              </h3>
              <div className="mt-6" style={{textAlign:'center'}}>
                <a
                  href={import.meta.env.BASE_URL + "./Resume_V1.pdf"} // Replace with your file path
                  download="resume.pdf" // Specify the downloaded file name
                >
                <Button className="mr-2 m-1 bg-indigo-700"><DownloadIcon />Download Resume</Button>
                </a>
              </div>
          </div>
          </div>
          <h3 className="text-2xl tracking-wider font-bold mt-10 pt-4" style={{textAlign:'center'}} id='contact'>CONTACT</h3>
          <div className='m-2 mt-6' style={{textAlign:'center'}}>
            <Button className="mr-2 m-1.5 bg-sky-800" onClick={LinkedinButton} ><LinkedInLogoIcon /> LinkedIn</Button>
            <Button className="mr-2 m-1.5 bg-green-800" 
              onClick={() => {navigator.clipboard.writeText('+65 9824 5934');
              toast({description: "Phone number copied to clipboard",action: (<ToastAction>OK</ToastAction>)});console.log('Phone number copied to clipboard')
            }}><Phone /> +65 9824 5934
            </Button>
            <Button className="mr-2 m-1.5 bg-red-900" onClick={EmailButton}><Mail /> miguellouis.lm@gmail.com</Button>
            <Button className="mr-2 m-1.5" onClick={GithubButton}><GitHubLogoIcon /> pizzackz</Button>
          </div>
          <h3 className="text-2xl tracking-wider font-bold mt-10 pt-4" style={{textAlign:'center'}}>PROJECTS</h3>
          <Card className='bg-gray-900 mt-6'>
            <CardHeader>
              <CardTitle id='virtutrade' className="tracking-normal">VirtuTrade <Button style={{float:'right'}} onClick={() => {window.open('https://github.com/TinyTyno/SIT-Hackathon-2024', '_blank')}}><GitHubLogoIcon /> Github Repository</Button></CardTitle>
              <CardDescription className="tracking-wide">September 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="tracking-wide text-sm">This was a group project that won 1st runner-up for the NYP SIT Code Overflow Hackathon 2024.
                VirtuTrade is an online demo broker platform that simulates trading and 
                investments with real-time data using YahooFinance API. 
                Its purpose is to teach teenagers how to use an online broker.
                <br /><br />
                <img 
                  src={import.meta.env.BASE_URL + ".media/virtutrade1.png" }
                  style={{ height:'auto' , maxHeight: '400px', width:'auto', borderRadius: '20px', textAlign:'center' }} 
                  className="mr-10 mb-5 flex-shrink-0"
                  alt="Picture"
                />
                <u>Technologies Used</u><br />
                <ul>
                  <li>• Frontend: React.js + Vite</li>
                  <li>• Backend: Node.js with Express.js and mySQL database via Sequelize ORM</li>
                  <li>• UI: ShadCN</li>
                  <li>• APIs: YahooFinance API, Alpha Vantage API, Google Gemini API</li>
                </ul><br /> 
                <u>Features</u><br />
                <ol>
                  <li>1. Real-time Trading and Investments<br />
                      - Allows buying, selling (Including short-selling) and position closing of stocks and cryptocurrency<br />
                      - Real-time stock data using YahooFinance API and Alpha Vantage API (For charts)<br />
                      - Simplified and User-Friendly UI where users can hover over complex terms to find that their definition<br />
                      - Stock Search where users can search find the stock/cryptocurrency that they want to invest in<br />
                      - Order History where users can view their past orders, and the details (e.g. price they bought the stock at)<br />
                      - Portfolio page where users can view all their positions, top up their cash balance <br />
                  </li><br />

                  <li>2. Investor Risk Profile Questionnaire<br />
                      - Users answers a series of questions to find out their risk profile and advice on what type of securities to invest in</li>  <br />

                  <li>3. Finance Chatbot<br />
                      - Uses Google Gemini API <br />
                      - Allows users to find out more on stocks<br /></li> <br />

                  <li>4. QnA platform where users can interact with other users</li><br />
                </ol>

                My role was mostly doing the front-end and back-end of the 
                real-time trading, stock searching, and the portfolio page.
                <br /><br />
                <u>Experience</u>
                <br />
                I still remember wanting to try again for this Hackathon as I joined it the previous year but I didn't have any luck. 
                I was still looking for a team, and then my friend was nice enough to invite me to join and I did. First thing I noticed was that there 
                were new faces, but I was looking forward to work with them. <br /> <br />
                
                But then a huge challenge sprung up just 3 days before the Hackathon: We knew that 
                that we would have to develop a Web Application for the competition so 
                we discussed and most wanted to use React and Node except me, as I completely did not have any 
                knowledge or experience working with either, and we would only have 3 days to develop the application. 
                Nevertheless, I decided to take up this challenge and started to learn both as I won't have anything to lose (Hopefully). <br /> <br />

                Finally, it was the start of the Hackathon, and our problem statement was "Create a web app that promotes financial 
                literacy among teenagers". We were a bit stuck with the ideation process, but then I thought of an idea: Since stocks 
                and cryptocurrency are becoming more popular amongst teenagers, why not create a platform that simulates trading and investments? 
                It allows teenagers to learn trading by doing it in a safe environment. The group agreed on the project and we proceeded to start.

                Over the next 3 days, we worked tirelessly to develop the application. I eventually became more acquainted with the frameworks, and I managed to 
                do the frontend and backend of the various functions.

                Finally, it was the day of the presentation. When it was our turn, we presented, but unfortunately, we overran the time limit. Afterwards, we were a bit worried that 
                we would not be able to even be on the podium. But then, the results were announced, and we were the 1st runner-up. We were a bit sad that we didn't win, but we were still happy
                with the outcome as we were able to develop a working application in such a short time frame. <br /> <br />
              </p>
              <img 
                  src={import.meta.env.BASE_URL + ".media/virtutrade.jpeg"}
                  style={{ height:'auto' , maxHeight: '400px', width:'auto', borderRadius: '20px', justifyContent:'center' }} 
                  className="mr-10 mb-5 flex-shrink-0"
                  alt="Picture"
                />
            </CardContent>
          </Card>
          <Card className='bg-gray-900 mt-6'>
            <CardHeader>
              <CardTitle id='tastefully' className="tracking-normal">Tastefully 2.0<Button style={{float:'right'}} onClick={() => {window.open('https://github.com/pizzackz/AppSecurityProject', '_blank')}}><GitHubLogoIcon /> Github Repository</Button></CardTitle>
              <CardDescription className="tracking-wide">April 2024 - August 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="tracking-wide text-sm">
              A platform for users to create and share recipes, 
              and sell food bundles into an all in one sustainable meal service. 
              This project was developed using Python Flask with Jinja Templating. This project is a continuation of 
              tastefully, and earned an 'A' grade for the module App Security Project.
                <br /><br />
                <img 
                  src={import.meta.env.BASE_URL + "./media/tastefully.jpeg"}
                  style={{ height:'auto' , maxHeight: '400px', width:'auto', borderRadius: '20px', textAlign:'center' }} 
                  className="mr-10 mb-5 flex-shrink-0"
                  alt="Picture"
                />
                <u>Technologies Used</u><br />
                <ul>
                  <li>• Frontend: HTML, CSS, Javascript and Bootstrap</li>
                  <li>• Backend: Python Flask and mySQL Database</li>
                  <li>• API: Google Gemini API, charts.js, TinyMCE</li>
                </ul><br /> 
                <u>Features implemented by me:</u><br />
                <ol>
                <li>1. <b>Recipe Database</b>: Advanced Recipe Searching with Multisearch and Recipe CRUD. Implemented with TinyMCE API</li>
                <li>2. <b>Recipe AI Creator and Customiser</b>: Recipe Creation and Existing Recipe Customisation using Google Gemini API</li>
                <li>3. <b>Recipe Dashboard</b>: Overview of Recipes, Recipe Locking, Chart of Recipe Actions over the last 12 hours implemented with charts.js API, Clearing Recipes, Trash Bin for Recipes</li>
                </ol><br />
                <u>Security Features</u><br />
                Security Features:
                Content Security Policy, CSRF Protection, JWT Token Checker, Full Whitelist Input Cleaning and Validation, HTML Encoding, Pagination (For Performance), Malicious File Token w/ VirusTotal API, Recipe Lock (In Recipe Dashboard), Request Limiter
  
                <br /><br />
                <u>Experience</u>
                <br />
                This project was a learning experience and also a challenge, especially working with new technologies (MySQL, APIs), and ensuring security. <br /> <br />

                One challenge that I faced was balancing the features, user interface and security. 
                How do we make our application feature-rich, yet easy to navigate, and resistant to attacks? 
                The more the features, the more the vulnerabilities. The solution to this was secure coding from the start.<br /> <br />

                Through this project, I managed to learn more about cybersecurity, and I look forward to applying this in the future. <br /> <br />
              </p>
              <img 
                  src={import.meta.env.BASE_URL + "./media/tastefully3.jpeg"}
                  style={{ height:'auto' , maxHeight: '400px', width:'auto', borderRadius: '20px', justifyContent:'center' }} 
                  className="mr-10 mb-5 flex-shrink-0"
                  alt="Picture"
                />
            </CardContent>
          </Card>
          <Card className='bg-gray-900 mt-6'>
            <CardHeader>
              <CardTitle id='mdg' className="tracking-normal">Maison de Guzman<Button style={{float:'right'}} onClick={() => {window.open('https://github.com/pizzackz/maisondeguzman', '_blank')}}><GitHubLogoIcon /> Github Repository</Button></CardTitle>
              <CardDescription className="tracking-wide">April 2023 - August 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="tracking-wide text-sm">
              Maison de Guzman is a restaurant website inspired by spanish, mexican, french and italian cuisines that allows users to order delivery online. This project achieved Distinction for the module Web Development.
                <br /><br />
                <img 
                  src={import.meta.env.BASE_URL + "./media/mdg.png"}
                  style={{ height:'auto' , maxHeight: '400px', width:'auto', borderRadius: '20px', textAlign:'center' }} 
                  className="mr-10 mb-5 flex-shrink-0"
                  alt="Picture"
                />
                <u>Technologies Used</u><br />
                <ul>
                  <li>• Frontend: HTML, CSS, Javascript and Bootstrap</li>
                </ul><br /> 
                <u>Features implemented by me:</u><br />
                <ol>
                <li>1. Ordering delivery</li>
                <li>2. Animations</li>
                </ol><br />
                <u>Experience</u>
                <br />
                This was my first project using HTML, CSS and Javascript. I had a lot of fun with this project especially making the animations for the home page. AI proves to be a very great tool at creating images<br /> <br />

                I had some problems at first with the Navbar, but I decided to leave it that way as I think it looks unique.<br /> <br />
              </p>
              <img 
                  src={import.meta.env.BASE_URL + "./media/mdg1.png"}
                  style={{ height:'auto' , maxHeight: '400px', width:'auto', borderRadius: '20px', justifyContent:'center' }} 
                  className="mr-10 mb-5 flex-shrink-0"
                  alt="Picture"
                />
            </CardContent>
          </Card>
        </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}

export default App
