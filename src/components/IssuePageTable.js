import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Card, CardContent, Chip, Divider, Grid, Hidden } from "@mui/material";
import Test from '../main.json';
import {useState,useEffect} from 'react'
import { API_SERVICE } from '../config/API';

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "blog.test.com",
        customerId: "Subdomain",
      },
      {
        date: "test.test.com",
        customerId: "Subdomain",
      },
      {
        date: "test2.test.com",
        customerId: "Subdomain",
      },
      {
        date: "test3.test.com",
        customerId: "Subdomain",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open10, setOpen10] = React.useState(false);
  const [open11, setOpen11] = React.useState(false);
  const [open12, setOpen12] = React.useState(false);
  const [open13, setOpen13] = React.useState(false);
  const [open14, setOpen14] = React.useState(false);
  const [open15, setOpen15] = React.useState(false);
  const [open16, setOpen16] = React.useState(false);
  const [open17, setOpen17] = React.useState(false);
  const [open18, setOpen18] = React.useState(false);
  const [open19, setOpen19] = React.useState(false);
  const [open20, setOpen20] = React.useState(false);
  const [open21, setOpen21] = React.useState(false);
  const [open22, setOpen22] = React.useState(false);
  const [open23, setOpen23] = React.useState(false);
  const [open24, setOpen24] = React.useState(false);
  const [open25, setOpen25] = React.useState(false);
  const [open26, setOpen26] = React.useState(false);

  console.log(row)

  const uniqueArray = row.misconfiguration.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === row.misconfiguration.findIndex(res => {
      return JSON.stringify(res) === _value;
    });
  });

  var clean = row.misconfiguration.filter((arr, index, self) =>
    index === self.findIndex((t) => (t.save === row.misconfiguration.save && t.State === row.misconfiguration.State)))



var newArray = uniqueArray.filter(function (el) {
  return el.Issues1 === "strict-transport-security";
});

var newArray2 = uniqueArray.filter(function (el) {
  return el.Issues2 === "content-security-policy";
});

var newArray3 = uniqueArray.filter(function (el) {
  return el.Issues3 === "permission-policy";
});

var newArray4 = uniqueArray.filter(function (el) {
  return el.Issue4 === "x-frame-options";
});

var newArray5 = uniqueArray.filter(function (el) {
  return el.Issue5 === "x-content-type-options";
});

var newArray6 = uniqueArray.filter(function (el) {
  return el.Issue6 === "x-permitted-cross-domain-policies";
});

var newArray7 = uniqueArray.filter(function (el) {
  return el.Issue7 === "referrer-policy";
});

var newArray8 = uniqueArray.filter(function (el) {
  return el.Issue8 === "cross-origin-embedder-policy";
});

var newArray9 = uniqueArray.filter(function (el) {
  return el.Issue9 === "cross-origin-opener-policy";
});

var newArray10 = uniqueArray.filter(function (el) {
  return el.Issue10 === "cross-origin-opener-policy";
});

var newArray11 = uniqueArray.filter(function (el) {
  return el.Issue11 === "cross-origin-resource-policy";
});

var newArray12 = uniqueArray.filter(function (el) {
  return el.Issue12 === "access-control-allow-origin";
});

var newArray13 = uniqueArray.filter(function (el) {
  return el.Issue13 === "access-control-allow-credentials";
});

var newArray14 = uniqueArray.filter(function (el) {
  return el.Issue14 === "access-control-expose-headersy";
});

var newArray15 = uniqueArray.filter(function (el) {
  return el.Issue15 === "access-control-max-age";
});

var newArray16 = uniqueArray.filter(function (el) {
  return el.Issue16 === "access-control-allow-methods";
});

var newArray17 = uniqueArray.filter(function (el) {
  return el.Issue17 === "access-control-allow-headers";
});

console.log(uniqueArray)
  return (
    <>
    {uniqueArray.map((historyRow, index) => (
    <React.Fragment>
      
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issues1}</tr>
        </TableCell>
         
       
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Category}</tr>
        </TableCell>
        
        <TableCell align="left" component="th" scope="row">
          <Chip label="Low" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  {" "}
                  <Typography>Details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <b>Info</b>  
                      <br />
                      <br />
                      <li>{historyRow.Info1}</li>

                      <Divider />
                      <br />
                     <b>Remediation</b>  
                      <br />
                      <br />  
                      <li>Configure the remote web server to use HSTS</li>                  
                      <Divider />
                      <br />
                     <b> Refrences</b> 
                      <br />
                      <br /> 
                    <li><a href="https://portswigger.net/kb/issues/01000300_strict-transport-security-not-enforced">https://portswigger.net/kb/issues/01000300_strict-transport-security-not-enforced</a></li>   
                    <li><a href="https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html">https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html</a></li>   
                    <li><a href="https://www.acunetix.com/vulnerabilities/web/http-strict-transport-security-hsts-not-implemented/">https://www.acunetix.com/vulnerabilities/web/http-strict-transport-security-hsts-not-implemented</a></li>                 
                      <Divider />
                      <br />
                    <b>  Domain    </b>       
                      {newArray.map((historyRow) => (
                          <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                          <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                           
                          </TableCell>
                          </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      
        <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  {" "}
                  <Typography>Details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <b>Info</b>  
                      <br />
                      <br />
                      <li>The application should instruct web browsers to only access the application using
                        HTTPS. To do this, enable HTTP Strict Transport Security (HSTS) by adding a response header
with the name 'Strict-Transport-Security' and the value 'max-age=expireTime', where
expireTime is the time in seconds that browsers should remember that the site should only
be accessed using HTTPS. Consider adding the 'includeSubDomains' flag if appropriate.</li>

                      <Divider />
                      <br />
                     <b>Remediation</b>  
                      <br />
                      <br />  
                      <li>Configure the remote web server to use HSTS</li>                  
                      <Divider />
                      <br />
                     <b> Refrences</b> 
                      <br />
                      <br /> 
                    <li><a href="https://portswigger.net/kb/issues/01000300_strict-transport-security-not-enforced">https://portswigger.net/kb/issues/01000300_strict-transport-security-not-enforced</a></li>   
                    <li><a href="https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html">https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html</a></li>   
                    <li><a href="https://www.acunetix.com/vulnerabilities/web/http-strict-transport-security-hsts-not-implemented/">https://www.acunetix.com/vulnerabilities/web/http-strict-transport-security-hsts-not-implemented</a></li>                 
                      <Divider />
                      <br />
                    <b>  Domain    </b>       
                      {newArray.map((historyRow) => (
                          <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                          <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                           
                          </TableCell>
                          </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      
      
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issues2}</tr>
        </TableCell>
        
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Category}</tr>
        </TableCell>
         
        <TableCell align="left" component="th" scope="row">
          <Chip label="Low" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen10(!open10)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open10} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  {" "}
                  <Typography>Details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card >
                    <CardContent>
                    <b>Info</b>  
                      <br />
                      <br />     
                      <li>Content Security Policy (CSP) is a web security standard that helps to mitigate attacks like crosssite scripting (XSS), clickjacking or mixed content issues. CSP provides mechanisms to websites to
restrict content that browsers will be allowed to load.</li>              
                      <Divider />
                      <br />
                     <b>Remediation</b>  
                      <br />
                      <br />  
                      <li>Configure Content Security Policy on your website by adding 'ContentSecurity-Policy' HTTP header or meta tag http-equiv='Content-Security-Policy'.</li>                  
                      <Divider />
                      <br />
                     <b> Refrences</b> 
                      <br />
                      <br />  
                      <li><a href="https://www.tenable.com/plugins/was/112551">https://www.tenable.com/plugins/was/112551</a></li>
                      <li><a href="https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html">https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html</a></li>
                      <li><a href="https://www.lunasec.io/docs/blog/csp/">https://www.lunasec.io/docs/blog/csp/</a></li>
                      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"></a>https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP</li>                   
                      <Divider />
                      <br />
                    <b>  Domain    </b>          
                      {newArray2.map((historyRow) => (
                        <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>

                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issues3}</tr>
        </TableCell>
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Category}</tr>
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          <Chip label="Low" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen11(!open11)}
          >
            {open11 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open11} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  {" "}
                  <Typography>Details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                    <b>Info</b>  
                      <br />
                      <br />    
                      <li>Permissions Policy provides mechanisms to websites to restrict the use of browser
features in its own frame and in iframes that it embeds</li>               
                      <Divider />
                      <br />
                     <b>Remediation</b>  
                      <br />
                      <br />  
                      <li>Configure Permissions Policy on your website by adding 'Permissions-Policy' HTTP
header.
</li>                  
                      <Divider />
                      <br />
                     <b> Refrences</b> 
                      <br />
                      <br />     
                      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy">https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy</a></li>
                      <li><a href="https://scotthelme.co.uk/goodbye-feature-policy-and-hello-permissions-policy">https://scotthelme.co.uk/goodbye-feature-policy-and-hello-permissions-policy</a>/</li>  
                      <li><a href="https://www.tenable.com/plugins/was/98526">https://www.tenable.com/plugins/was/98526</a></li>               
                      <Divider />
                      <br />
                    <b>  Domain    </b>        
                      {newArray3.map((historyRow) => (
                         <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue4}</tr>
        </TableCell>
         
        
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Category}</tr>
        </TableCell>
         
        <TableCell align="left" component="th" scope="row">
          <Chip label="Low" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen12(!open12)}
          >
            {open12 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open12} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  {" "}
                  <Typography>Details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                    <b>Info</b>  
                      <br />
                      <br />       
                      <li>Clickjacking (User Interface redress attack, UI redress attack, UI redressing) is a malicious
technique of tricking a Web user into clicking on something different from what the user
perceives they are clicking on, thus potentially revealing confidential information or taking
control of their computer while clicking on seemingly innocuous web pages</li>            
                      <Divider />
                      <br />
                     <b>Remediation</b>  
                      <br />
                      <br />  
                      <li>Configure your web server to include an `X-Frame-Options` header.</li>                 
                      <Divider />
                      <br />
                     <b> Refrences</b> 
                      <br />
                      <br />    
                      <li><a href="https://www.tenable.com/plugins/was/98060">https://www.tenable.com/plugins/was/98060</a></li>
                      <li><a href= "https://www.tenable.com/plugins/nessus/85582">https://www.tenable.com/plugins/nessus/85582</a></li>
                      <li><a href="https://www.tenable.com/audits/items/CIS_NGINX_Level_1_Webserver_v1.0.0.audit:cf03fc40040339fb42fd2688dd087fa7">https://www.tenable.com/audits/items/CIS_NGINX_Level_1_Webserver_v1.0.0.audit:cf03fc40040339fb42fd2688dd087fa7</a></li>
                      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options">https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options</a></li>
                      <li><a href="https://www.geeksforgeeks.org/http-headers-x-frame-options/">https://www.geeksforgeeks.org/http-headers-x-frame-options</a></li>                  
                      <Divider />
                      <br />
                    <b>  Domain    </b>           
                      {newArray4.map((historyRow) => (
                         <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue5}</tr>
        </TableCell>
         
       
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Category}</tr>
        </TableCell>
         
        <TableCell align="left" component="th" scope="row">
          <Chip label="Low" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen13(!open13)}
          >
            {open13 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open13} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  {" "}
                  <Typography>Details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                    <b>Info</b>  
                      <br />
                      <br />      
                      <li>The X-Content-Type-Options response HTTP header is a marker used by the server to indicate
that the MIME types advertised in the Content-Type headers should be followed and not be
changed. The header allows you to avoid MIME type sniffing by saying that the MIME types are
deliberately configured.</li>            
                      <Divider />
                      <br />
                     <b>Remediation</b>  
                      <br />
                      <br />    
                      <li>Configure your web server to include an 'X-Content-Type-Options' header
with a value of 'nosniff'.
</li>                
                      <Divider />
                      <br />
                     <b> Refrences</b> 
                      <br />
                      <br />    
                      <li><a href="https://www.tenable.com/plugins/was/112529">https://www.tenable.com/plugins/was/112529</a></li>
                      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options">https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options</a></li>
                      <li><a href="https://docs.w3cub.com/http/headers/x-content-type-options">https://docs.w3cub.com/http/headers/x-content-type-options</a></li>
                      <li><a href="https://webhint.io/docs/user-guide/hints/hint-x-content-type-options/">https://webhint.io/docs/user-guide/hints/hint-x-content-type-options/</a></li>                  
                      <Divider />
                      <br />
                    <b>  Domain    </b>          
                      {newArray5.map((historyRow) => (
                         <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue6}</tr>
        </TableCell>
        
       
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Category}</tr>
        </TableCell>
         
        <TableCell align="left" component="th" scope="row">
          <Chip label="Low" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen14(!open14)}
          >
            {open14 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open14} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  {" "}
                  <Typography>Details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                    <b>Info</b>  
                      <br />
                      <br />      
                      <li>The X-Permitted-Cross-Domain-Policies header is used to permit cross-domain requests from
Flash and PDF documents. In most cases, these permissions are defined in an XML document called
crossdomain.xml found in the root directory of the web page. For situations in which the root
directory cannot be specified, however, this header can be used to define a desired meta policy. The
X-Permitted-Cross-Domain-Policies header should ideally be set as restrictively as possible. </li>            
                      <Divider />
                      <br />
                     <b>Remediation</b>  
                      <br />
                      <br /> 
                      <li>An unwanted policy file may find its way onto your site, either by accident or malice.
The purpose of adding X-Permitted-Cross-Domain-Policies in this case is to override it, so that the
client still blocks unwanted requests. </li>                 
                      <Divider />
                      <br />
                     <b> Refrences</b> 
                      <br />
                      <br /> 
                      <li><a href="https://owasp.org/www-project-secure-headers/#x-permitted-cross-domain-policies">https://owasp.org/www-project-secure-headers/#x-permitted-cross-domain-policies</a></li>                    
                      <li><a href="https://danielnixon.org/http-security-headers/">https://danielnixon.org/http-security-headers</a></li>                    
                      <li><a href="https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/xdomain.html">https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/xdomain.html</a></li>                    
                      <li><a href="https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/xdomain.html">https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/xdomain.html</a></li>                    
                      <Divider />
                      <br />
                    <b>  Domain    </b>          
                      {newArray6.map((historyRow) => (
                         <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue7}</tr>
        </TableCell>
         
        
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Category}</tr>
        </TableCell>
         
        <TableCell align="left" component="th" scope="row">
          <Chip label="Low" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen15(!open15)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open15} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  {" "}
                  <Typography>Details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                    <b>Info</b>  
                      <br />
                      <br />   
                      <li>Referrer Policy controls behaviour of the Referrer header, which indicates the origin or web
page URL the request was made from. The web application uses insecure Referrer Policy
configuration that may leak user's information to third-party sites</li>                
                      <Divider />
                      <br />
                     <b>Remediation</b>  
                      <br />
                      <br />
                      <li>Consider setting Referrer-Policy header to 'strict-origin-when-cross-origin' or a stricter
value
</li>                    
                      <Divider />
                      <br />
                     <b> Refrences</b> 
                      <br />
                      <br />   
                      <li><a href="https://www.acunetix.com/vulnerabilities/web/insecure-referrer-policy">https://www.acunetix.com/vulnerabilities/web/insecure-referrer-policy</a></li>                  
                      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy">https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy</a></li>                  
                      <li><a href="https://www.tenable.com/plugins/was/98527">https://www.tenable.com/plugins/was/98527</a></li>                  
                      <li><a href="https://beaglesecurity.com/blog/vulnerability/referrer-policy-header-cannot-be-recognized.html">https://beaglesecurity.com/blog/vulnerability/referrer-policy-header-cannot-be-recognized.html</a></li>                  
                      <Divider />
                      <br />
                    <b>  Domain    </b>          
                      {newArray7.map((historyRow) => (
                         <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue8}</tr>
        </TableCell>
         
       
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Category}</tr>
        </TableCell>
        
        <TableCell align="left" component="th" scope="row">
          <Chip label="Low" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen16(!open16)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open16} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  {" "}
                  <Typography>Details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                    <b>Info</b>  
                      <br />
                      <br />   
                      <li>The HTTP Cross-Origin-Embedder-Policy (COEP) response header prevents a document from
loading any cross-origin resources that don't explicitly grant the document permission (using CORP
or CORS).</li>                
                      <Divider />
                      <br />
                     <b>Remediation</b>  
                      <br />
                      <br /> 
                      <li>Use COOP and COEP to set up a cross-origin isolated environment and enable
powerful features like SharedArrayBuffer, performance.measureUserAgentSpecificMemory() and
high resolution timer with better precision.</li>                   
                      <Divider />
                      <br />
                     <b> Refrences</b> 
                      <br />
                      <br /> 
                      <li><a href="https://web.dev/coop-coep/">https://web.dev/coop-coep/</a></li>                    
                      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy">https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy</a></li>                    
                      <li><a href="https://docs.w3cub.com/http/headers/cross-origin-embedder-policy">https://docs.w3cub.com/http/headers/cross-origin-embedder-policy</a></li>                    
                      <Divider />
                      <br />
                    <b>  Domain    </b>          
                      {newArray8.map((historyRow) => (
                         <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue9}</tr>
        </TableCell>
         
       
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Category}</tr>
        </TableCell>
        
        <TableCell align="left" component="th" scope="row">
          <Chip label="Low" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen17(!open17)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open17} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  {" "}
                  <Typography>Details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                    <b>Info</b>  
                      <br />
                      <br /> 
                      <li>The HTTP Cross-Origin-Opener-Policy (COOP) response header allows you to ensure a top-level
document does not share a browsing context group with cross-origin documents. COOP will
process-isolate your document and potential attackers can't access your global object if they were to
open it in a popup, preventing a set of cross-origin attacks dubbed XS-Leaks</li>                 
                      <Divider />
                      <br />
                     <b>Remediation</b>  
                      <br />
                      <br /> 
                      <li>Use COOP and COEP to set up a cross-origin isolated environment and enable
powerful features like SharedArrayBuffer, performance.measureUserAgentSpecificMemory() and
high resolution timer with better precision</li>                   
                      <Divider />
                      <br />
                     <b> Refrences</b> 
                      <br />
                      <br />    
                      <li><a href="https://resourcepolicy.fyi/">https://resourcepolicy.fyi/</a></li>                 
                      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)">https://developer.mozilla.org/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)</a> </li>                 
                      <li><a href="https://www.geeksforgeeks.org/http-headers-cross-origin-resource-policy/">https://www.geeksforgeeks.org/http-headers-cross-origin-resource-policy/</a></li>                 
                      <li><a href="https://xsleaks.dev/docs/defenses/opt-in/corp/">https://xsleaks.dev/docs/defenses/opt-in/corp/</a></li>                 
                      <Divider />
                      <br />
                    <b>  Domain    </b>          
                      {newArray9.map((historyRow) => (
                         <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue10}</tr>
        </TableCell>
       
       
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Category}</tr>
        </TableCell>
         
        <TableCell align="left" component="th" scope="row">
          <Chip label="Low" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen18(!open18)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open18} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  {" "}
                  <Typography>Details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                    <b>Info</b>  
                      <br />
                      <br />  
                      <li>The HTTP Cross-Origin-Opener-Policy (COOP) response header allows you to ensure a top-level
document does not share a browsing context group with cross-origin documents. COOP will
process-isolate your document and potential attackers can't access your global object if they were to
open it in a popup, preventing a set of cross-origin attacks dubbed XS-Leaks</li>                 
                      <Divider />
                      <br />
                     <b>Remediation</b>  
                      <br />
                      <br /> 
                      <li>Use COOP and COEP to set up a cross-origin isolated environment and enable
powerful features like SharedArrayBuffer, performance.measureUserAgentSpecificMemory() and
high resolution timer with better precision</li>                   
                      <Divider />
                      <br />
                     <b> Refrences</b> 
                      <br />
                      <br />     
                      <li><a href="https://resourcepolicy.fyi/">https://resourcepolicy.fyi/</a></li>                 
                      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)">https://developer.mozilla.org/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)</a> </li>                 
                      <li><a href="https://www.geeksforgeeks.org/http-headers-cross-origin-resource-policy/">https://www.geeksforgeeks.org/http-headers-cross-origin-resource-policy</a></li>                 
                      <li><a href="https://xsleaks.dev/docs/defenses/opt-in/corp/">https://xsleaks.dev/docs/defenses/opt-in/corp/</a></li>              
                      <Divider />
                      <br />
                    <b>  Domain    </b>          
                      {newArray10.map((historyRow) => (
                         <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue11}</tr>
        </TableCell>
         
       
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Category}</tr>
        </TableCell>
         
        <TableCell align="left" component="th" scope="row">
          <Chip label="Low" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen19(!open19)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open19} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  {" "}
                  <Typography>Details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                    <b>Info</b>  
                      <br />
                      <br />
                      <li>The Cross-Origin-Resource-Policy (CORP) header allows you to control the set of origins that are
empowered to include a resource. It is a robust defense against attacks like Spectre, as it allows
browsers to block a given response before it enters an attacker's process. </li>                   
                      <Divider />
                      <br />
                     <b>Remediation</b>  
                      <br />
                      <br /> 
                      <li>To activate this policy, append the following HTTP header to the document</li>                   
                      <Divider />
                      <br />
                     <b> Refrences</b> 
                      <br />
                      <br />  
                      <li><a href="https://resourcepolicy.fyi/">https://resourcepolicy.fyi/</a></li>                    
                      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)">https://developer.mozilla.org/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)</a></li>                    
                      <li><a href="https://www.geeksforgeeks.org/http-headers-cross-origin-resource-policy/">https://www.geeksforgeeks.org/http-headers-cross-origin-resource-policy/</a></li>                    
                      <li><a href="https://xsleaks.dev/docs/defenses/opt-in/corp/">https://xsleaks.dev/docs/defenses/opt-in/corp/</a></li>                    
                      <Divider />
                      <br />
                    <b>  Domain    </b>          
                      {newArray11.map((historyRow) => (
                        <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                        <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                         
                        </TableCell>
                        </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue12}</tr>
        </TableCell>
       
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Category}</tr>
        </TableCell>
         
        <TableCell align="left" component="th" scope="row">
          <Chip label="Low" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen20(!open20)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open20} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  {" "}
                  <Typography>Details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                    <b>Info</b>  
                      <br />
                      <br />     
                      <li>The 'Access-Control-Allow-Origin' header is insecure when set to '*' or null, as it allows any
domain to perform cross-domain requests and read responses. An attacker could abuse this
configuration to retrieve private content from an application which does not use standard
authentication mechanisms (for example, an Intranet allowing access from the internal network
only).</li>              
                      <Divider />
                      <br />
                     <b>Remediation</b>  
                      <br />
                      <br />     
                      <li>Unless the target application is specifically designed to serve public content to any
domain, the 'Access-Control-Allow-Origin' should be configured with an allow list including only
known and trusted domains to perform cross-domain requests if needed or should be disabled.</li>               
                      <Divider />
                      <br />
                     <b> Refrences</b> 
                      <br />
                      <br />    
                      <li><a href="https://www.tenable.com/plugins/was/98057">https://www.tenable.com/plugins/was/98057</a></li>                  
                      <li><a href="https://owasp.org/www-community/attacks/CORS_OriginHeaderScrutiny">https://owasp.org/www-community/attacks/CORS_OriginHeaderScrutiny</a> </li>                  
                      <li><a href="https://developer.mozilla.org/en-US/docs/web/http/cors">https://developer.mozilla.org/en-US/docs/web/http/cors</a></li>                  
                      <Divider />
                      <br />
                    <b>  Domain    </b>          
                      {newArray12.map((historyRow) => (
                        <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                        <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                         
                        </TableCell>
                        </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue13}</tr>
        </TableCell>
        
        
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Category}</tr>
        </TableCell>
         
        <TableCell align="left" component="th" scope="row">
          <Chip label="Low" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen21(!open21)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open21} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  {" "}
                  <Typography>Details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                    <b>Info</b>  
                      <br />
                      <br /> 
                      <li>The 'Access-Control-Allow-Origin' header is insecure when set to '*' or null, as it allows any
domain to perform cross-domain requests and read responses. An attacker could abuse this
configuration to retrieve private content from an application which does not use standard
authentication mechanisms (for example, an Intranet allowing access from the internal network
only).
  </li>                  
                      <Divider />
                      <br />
                     <b>Remediation</b>  
                      <br />
                      <br />  
                      <li>The Cross-Origin Resource Sharing standard works by adding new HTTP headers that
let servers describe which origins are permitted to read that information from a web browser.</li>                  
                      <Divider />
                      <br />
                     <b> Refrences</b> 
                      <br />
                      <br />   
                      <li><a href="https://www.tenable.com/plugins/was/98057">https://www.tenable.com/plugins/was/98057</a></li>                   
                      <li><a href="https://owasp.org/www-community/attacks/CORS_OriginHeaderScrutiny">https://owasp.org/www-community/attacks/CORS_OriginHeaderScrutiny</a></li>                   
                      <li><a href="https://developer.mozilla.org/en-US/docs/web/http/cors">https://developer.mozilla.org/en-US/docs/web/http/cors</a></li>                   
                      <li><a href="https://vulncat.fortify.com/en/detail?id=desc.dynamic.html.html5_cors_unsafe_method_allowed">https://vulncat.fortify.com/en/detail?id=desc.dynamic.html.html5_cors_unsafe_method_allowed</a></li>                   
                      <Divider />
                      <br />
                    <b>  Domain    </b>          
                      {newArray13.map((historyRow) => (
                         <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue14}</tr>
        </TableCell>
         
       
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Category}</tr>
        </TableCell>
         
        <TableCell align="left" component="th" scope="row">
          <Chip label="Low" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  {" "}
                  <Typography>Details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                    <b>Info</b>  
                      <br />
                      <br />     
                      <li>The Access-Control-Expose-Headers response header allows a server to indicate which
response headers should be made available to scripts running in the browser, in response to a crossorigin request.</li>              
                      <Divider />
                      <br />
                     <b>Remediation</b>  
                      <br />
                      <br />  
                      <li> Enable authentication on the resources accessed and require that the user/application
credentials be passed with the CORS requests.</li> 
<li>It is not possible to be 100% certain that any request comes from an expected client application,
since all information of a HTTP request can be faked</li>                
                      <Divider />
                      <br />
                     <b> Refrences</b> 
                      <br />
                      <br />       
                      <li><a href="https://www.tenable.com/plugins/was/98057">https://www.tenable.com/plugins/was/98057</a></li>               
                      <li><a href="https://owasp.org/www-community/attacks/CORS_OriginHeaderScrutiny">https://owasp.org/www-community/attacks/CORS_OriginHeaderScrutiny</a></li>               
                      <li><a href="https://developer.mozilla.org/en-US/docs/web/http/cors">https://developer.mozilla.org/en-US/docs/web/http/cors</a></li>  
                      <li><a href="https://vulncat.fortify.com/en/detail?id=desc.dynamic.html.html5_cors_unsafe_method_allowed">https://vulncat.fortify.com/en/detail?id=desc.dynamic.html.html5_cors_unsafe_method_allowed</a></li>             
                      <Divider />
                      <br />
                    <b>  Domain    </b>         
                      {newArray14.map((historyRow) => (
                        <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                        <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                         
                        </TableCell>
                        </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue15}</tr>
        </TableCell>
         
       
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Category}</tr>
        </TableCell>
         
        <TableCell align="left" component="th" scope="row">
          <Chip label="Low" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  {" "}
                  <Typography>Details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                    <b>Info</b>  
                      <br />
                      <br />   
                      <li>The Access-Control-Max-Age response header indicates how long the results of a preflight
request (that is the information contained in the Access-Control-Allow-Methods and Access-ControlAllow-Headers headers) can be cached..</li>                
                      <Divider />
                      <br />
                     <b>Remediation</b>  
                      <br />
                      <br />  
                      <li>: Maximum number of seconds the results can be cached, as an unsigned non-negative
integer. Firefox caps this at 24 hours (86400 seconds). Chromium (prior to v76) caps at 10 minutes
(600 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5
seconds.</li>                  
                      <Divider />
                      Refrences  
                      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age">https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age</a></li>                   
                      <li><a href="https://docs.w3cub.com/http/headers/access-control-max-age">https://docs.w3cub.com/http/headers/access-control-max-age</a></li>                   
                      <li><a href="https://www.geeksforgeeks.org/http-headers-access-control-max-age/">https://www.geeksforgeeks.org/http-headers-access-control-max-age</a></li>                   
                      <Divider />
                      <br />
                    <b>  Domain    </b>           
                      {newArray15.map((historyRow) => (
                         <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue16}</tr>
        </TableCell>
         
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Category}</tr>
        </TableCell>
         
        <TableCell align="left" component="th" scope="row">
          <Chip label="Low" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  {" "}
                  <Typography>Details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                    <b>Info</b>  
                      <br />
                      <br />  
                      <li>The Access-Control-Allow-Methods header is a Cross-Origin Resource Sharing(CORS) responsetype header. It is used to indicate which HTTP methods are permitted while accessing the resources
in response to the cross-origin requests. </li>                
                      <Divider />
                      <br />
                     <b>Remediation</b>  
                      <br />
                      <br />    
                      <li>The Cross-Origin Resource Sharing standard works by adding new HTTP
headers that let servers describe which origins are permitted to read that information from a
web browser.</li>                
                      <Divider />
                      <br />
                     <b> Refrences</b> 
                      <br />
                      <br /> 
                      <li><a href="https://www.tenable.com/plugins/was/98057">https://www.tenable.com/plugins/was/98057</a></li>                    
                      <li><a href="https://owasp.org/www-community/attacks/CORS_OriginHeaderScrutiny">https://owasp.org/www-community/attacks/CORS_OriginHeaderScrutiny</a></li>                    
                      <li><a href="https://developer.mozilla.org/en-US/docs/web/http/cors">https://developer.mozilla.org/en-US/docs/web/http/cors</a></li>                    
                      <li><a href="https://vulncat.fortify.com/en/detail?id=desc.dynamic.html.html5_cors_unsafe_method_allowed">https://vulncat.fortify.com/en/detail?id=desc.dynamic.html.html5_cors_unsafe_method_allowed</a></li>                    
                      <Divider />
                      <br />
                    <b>  Domain    </b>         
                      {newArray16.map((historyRow) => (
                        <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                        <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                         
                        </TableCell>
                        </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue17}</tr>
        </TableCell>
         
       
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Category}</tr>
        </TableCell>
         
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  {" "}
                  <Typography>Details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      Name
                      <Divider />
                      Info                   
                      <Divider />
                      Remediation                    
                      <Divider />
                      Refrences                     
                      <Divider />
                      Domain           
                      {newArray17.map((historyRow) => (
                        <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                        <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                         
                        </TableCell>
                        </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      
        <TableCell align="left" component="th" scope="row">
          <tr>{historyRow.Issues1}</tr>
        </TableCell>
         
       
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Category}</tr>
        </TableCell>
         
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen2(!open2)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  <Typography>Breach</Typography>
                  <Card>
                    <CardContent>
                      Info
                      <br />
                      <br />
                      <br />
                      <br />
                      <Divider />
                      Remediation
                      <br />
                      <br />
                      <br />
                      <br />
                      <Divider />
                      Email
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>


      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      
        <TableCell align="left" component="th" scope="row">
         <tr>{historyRow.Issues1}</tr>
         
        </TableCell>
        
       
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Category}</tr>
        </TableCell>
         
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
          
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen3(!open3)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open3} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  <Typography>Email Leak</Typography>
                  <Card>
                    <CardContent>
                      Info
                      <br />
                      <br />
                      <br />
                      <br />
                      <Divider />
                      Remediation
                      <br />
                      <br />
                      <br />
                      <br />
                      <Divider />
                      Email
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
    ))}
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [createData("www.test.com")];

export default function IssuePageTable() {
  const [membershipdata, setmembershipdata] = useState([]);

  const [id, setid] = useState(null);
  useEffect(() => {
   
      setid(id);
      getthemembersipdata(id);
   
  }, []);

  

  const getthemembersipdata = async () => {
    try {
      const res = await fetch(`${API_SERVICE}/misconfig`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const content = await res.json();
      setmembershipdata(content);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <TableContainer component={Paper}>
      {membershipdata.map((a)=>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Serverity</TableCell>
            <TableCell>View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            
            <Row key={row.name} row={a} />
          ))}
        </TableBody>
      </Table>
      )}
    </TableContainer>
  );
}
