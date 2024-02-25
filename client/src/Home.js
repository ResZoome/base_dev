export default function Home(){
    return(
        <>
            <div class="row justify-content-evenly" style={{zIndex: "10"}}>
                <div class="col-8 text-start" >
                    <div class="text-start" style={{paddingTop: "1rem", paddingBottom: "1rem"}}>
                        <button type="button" class="btn" style={{color: "black", fontFamily: "Arial", borderRadius: "25px", borderColor: "Gainsboro"}}>THE <span style={{color: "blue"}}>#1</span> RESUME BUILDER</button>
                    </div>
                    <h1 style={{fontWeight: "800",  fontFamily: "Arial", fontSize: "5rem"}}>Create a Job-<br/>Ready Resume in<br/> Minutes</h1>
                </div>
                <div class="col-4">
                    <p class="text-start"  style={{color: "grey",  fontFamily: "Arial", fontSize: "1.5rem", paddingTop: "4rem"}}>Create your resume easily with our free builder and professional templates.</p>
                    <button type="button" class="btn btn-primary" style={{fontFamily: "Arial", borderRadius: "35px", padding: "1rem"}}>Build My Resume</button>
                </div>
            </div>
            <div class="container text-center">
                <div class="row justify-content-md-center">
                    <div class="col col-md-2" style={{backgroundColor: "white", height: "20rem", marginRight: "2rem", borderRadius: "25px", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.1)"}}>
                        <button type="button" class="btn text-start" style={{color: "black", fontFamily: "Arial", borderRadius: "25px", borderColor: "Gainsboro", width: "90%", fontWeight: "bold", marginTop: ".5rem"}}>Your Resume</button>
                        <p style={{width: "80%", backgroundColor: "LightGrey", height: "4%", borderRadius: "25px", marginLeft: "5%", marginTop: "10%"}}></p>
                        <p style={{width: "40%", backgroundColor: "WhiteSmoke", height: "4%", borderRadius: "25px", marginLeft: "5%", marginTop: "-2%"}}></p>
                        <div style={{width: "90%", height: "6rem", borderRadius: "25px", borderStyle: "dashed", borderColor: "lightBlue", marginLeft: "5%", marginTop: "15%", zIndex: 10}}></div>
                        <div style={{width: "100%", height: "6rem", backgroundColor: "white", borderRadius: "25px", marginLeft: "15%", marginTop: "-52%", zIndex: 1, boxShadow: "0 8px 16px 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.1)" }}>
                            <button style={{width: "2rem", height: "2rem", borderRadius: "50%", float: "left", marginLeft: '.5rem', marginTop: ".5rem", border: "none", backgroundColor: "LightGrey"}}></button>
                            <p style={{fontWeight: "bold", fontSize: ".8rem", paddingTop: ".4rem"}}>Your Resume Website</p>
                            <p class="text-start" style={{fontSize: ".5rem", marginLeft: "3.1rem", marginTop: "-1rem"}}>www.coolAF.com/BeenPimpin<br/>SinceBeenPimpin</p>
                            <button type="button" class="btn" style={{color: "black", fontFamily: "Arial", borderRadius: "25px", borderColor: "Gainsboro", fontWeight: "bold", fontSize: ".7rem", marginTop: "-1rem", marginLeft: "-3rem"}}><span style={{color: "blue"}}>=></span> Share</button>
                        </div>
                        <p style={{width: "80%", backgroundColor: "LightGrey", height: "4%", borderRadius: "25px", marginLeft: "5%", marginTop: "10%"}}></p>
                        <p style={{width: "80%", backgroundColor: "WhiteSmoke", height: "4%", borderRadius: "25px", marginLeft: "5%", marginTop: "-2%"}}></p>
                        <p style={{width: "40%", backgroundColor: "WhiteSmoke", height: "4%", borderRadius: "25px", marginLeft: "5%", marginTop: "-2%"}}></p>
                    </div>
                    <div class="col-lg-3" style={{backgroundColor: "LightGrey", height: "26.5rem", zIndex: "1", position: "relative", top: "-50px"}}>
                    </div>
                    <div class="col col-sm-2">
                        <div class="col col-md-2" style={{backgroundColor: "white", height: "20rem", marginRight: "2rem", borderRadius: "25px", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.1)"}}>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-primary">Left</button>
                                <button type="button" class="btn btn-primary">Middle</button>
                                <button type="button" class="btn btn-primary">Right</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}