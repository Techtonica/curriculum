# REST API

### Projected Time- 1-1.5 hrs

- Lesson: 10 min
- Guided Practice: 30 min
- Independent Practice: 30 min
- Check for Understanding: 5 min

### Prerequisites

Here are links to lessons that should be completed before this lesson:
- [API/JSON Lesson](/api/apis-and-json.md)


### Motivation
[From bbvaopen4u](https://bbvaopen4u.com/en/actualidad/rest-api-what-it-and-what-are-its-advantages-project-development)

 REST  completely  changed  software  engineering  after  2000.  This  new  approach  to  developing  web  projects  and  services  was  defined  by Roy  Fielding,  father  of  the  HTTP  specification  and  one  of  the  leading  international  authorities  on  everything  to  do  with  Network Architecture,  in  his  dissertation  entitled  "Architectural  Styles  and  the  Design  of  Network-based  Software  Architectures".  In  the  field of  APIs,  REST(Representational State Transfer)  is  today  the  "be  all  and  end  all"  in  service  app  development.
Today  there  are  no  projects  or  applications  that  don't  have  a  REST  API  for  the  creation  of  professional  services  based  on  this software.  Twitter,  YouTube,  Facebook  identification  systems…  hundreds  of  companies  generate  business  thanks  to  REST  and  REST  APIs. Without  them  any  horizontal  growth  would  be  practically  impossible.  This  is  because  REST  is  the  most  logical,  efficient  and   widespread  standard  in  the  creation  of  APIs  for  Internet  services.

### Objectives

- What is REST?
- REST Features.
- Guiding Principles of REST.
- HTTP Methods
- Advantages of REST

### Materials
- [Here is the link to Slideshow](https://docs.google.com/presentation/d/1ZdnhhGbwyJcmgPnTn6eeHjdhekUvo0ht70MwC7Ll5zw/edit#slide=id.g54f3514d6b_1_63)
- [Representational Rest API](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)
   - Go through lesson in above link and just give a read. Don't spend much time in this.
- [RESTful API quick guide](https://www.tutorialspoint.com/restful/restful_quick_guide.htm)
   - Go through the Introduction, Resources, Methods, Statelessness and question-answer part of the tutorial.
 
### Lesson

To  give  a  simple  definition,  REST  is  any  interface  between  systems  using  HTTP  to  obtain  data  and  generate  operations  on  those data in  all  possible  formats,  such  as  XML  and  JSON.  This  is  an  increasingly  popular  alternative  to  other  standard  data  exchange protocols such as SOAP (Simple Object Access Protocol), which have a high capacity but are also very complex. Sometimes it's preferable to use a simpler  data-processing  solution  such  as  REST. [(from bbaopen4u)](https://bbvaopen4u.com/en/actualidad/rest-api-what-it-and-what-are-its-advantages-project-development)


**REST's Features**
  
Stateless  client/server  protocol:  each  HTTP  contains  all  the  necessary  information  to  run  it,  which  means  that  neither  the  client nor  the  server  need  to  remember  any  previous  state  to  satisfy  it.  Be  that  as  it  may,  some  HTTP  applications  incorporate  a  cache  memory.  This  configures  what  is  known  as  the  stateless  client-cache-server protocol:  it  is  possible  to  define  some  of  the responses  to  specific  HTTP  requests  as  cachable,  so  the  client  can  run  the  same  response  for  identical  requests  in  the  future. However,  the  fact  that  the  option  exists  doesn't  mean  it  is  the  most  recommended.[(from bbvaopen4u)](https://bbvaopen4u.com/en/actualidad/rest-api-what-it-and-what-are-its-advantages-project-development)
  
**Guiding Principles of Rest**
   
- Client–server  –  By  separating  the  user  interface  concerns  from  the  data  storage  concerns,  we  improve  the  portability  of  the  user  interface  across  multiple  platforms  and  improve  scalability  by  simplifying  the  server  components.
- Stateless – Each  request  from  client  to  server  must  contain  all  of  the  information  necessary  to  understand  the  request,  and cannot  take  advantage  of  any  stored  context  on  the  server.  Session  state  is  therefore  kept  entirely  on  the  client.
- Cacheable – Cache  constraints  require  that  the  data within  a  response  to  a  request  be  implicitly  or  explicitly  labeled  as cacheable  or  non-cacheable.  If  a  response  is  cacheable,  then  a  client  cache  is  given  the  right  to  reuse  that  response  data  for later,  equivalent  requests.
- Uniform interface – By  applying  the  software  engineering  principle  of  generality  to  the  component  interface,  the  overall  system architecture  is  simplified  and  the  visibility  of  interactions  is  improved.  In  order  to  obtain  a  uniform  interface,  multiple architectural  constraints  are  needed  to  guide  the  behavior  of  components.  REST  is  defined  by  four  interface  constraints: identification  of  resources;  manipulation  of  resources  through  representations;  self-descriptive  messages;  and,  hypermedia  as  the engine  of  application  state.
- Layered  system – The  layered  system  style  allows  an  architecture  to  be  composed  of  hierarchical  layers  by  constraining  component behavior  such  that  each  component  cannot  “see”  beyond  the  immediate  layer  with  which  they  are  interacting.
- Code  on  demand – REST  allows  client  functionality  to  be  extended  by  downloading  and  executing  code  in  the  form  of applets  or  scripts.  This  simplifies  clients  by  reducing  the  number  of  features  required  to  be  pre-implemented.[(restfulapi.net)](https://restfulapi.net/)

     
There  are  four  very  important  data  transactions  in  any  REST  system  and  HTTP  specification:  POST (create),  GET(read and consult),  PUT (edit)  and  DELETE.
- HTTP  POST
   - Use  POST  APIs  to  create  new  subordinate  resources, e.g.  a  file  is  subordinate  to  a  directory  containing  it  or  a  row  is subordinate  to  a  database  table.  Talking  strictly  in  terms  of  REST,  POST  methods  are  used  to  create  a  new  resource  into  the collection  of  resources.  Ideally,  if  a  resource  has  been  created  on  the  origin  server,  the  response  SHOULD  be  HTTP  response  code 201  (Created)  and  contain  an  entity  which  describes  the  status  of  the  request  and  refers  to  the  new  resource,  and  a  Location header. Many  times,  the  action  performed  by  the  POST  method  might  not  result  in  a  resource  that  can  be  identified  by  a  URI.  In this  case,  either  HTTP  response  code  200 (OK)  or  204 (No Content)  is  the  appropriate  response  status.
   Responses  to  this  method  are  not  cacheable,  unless  the  response  includes  appropriate  Cache-Control  or  Expires  header  fields.
   Please  note  that  POST  is  neither  safe  nor  idempotent  and  invoking  two  identical  POST  requests  will  result  in  two  different  resources containing  the  same  information(except resource ids).
- HTTP  GET
   - Use  GET  requests  to  retrieve  resource  representation/information  only  –  and  not  to  modify  it  in  any  way.  As  GET  requests  do   not  change  the  state  of  the  resource,  these  are  said  to  be  safe  methods.  Additionally,  GET  APIs  should  be  idempotent,  which   means  that  making  multiple  identical  requests  must  produce  the  same  result  every  time  until  another  API(POST or PUT)  has       changed  the  state  of  the  resource  on  the  server.
   If  the  Request-URI  refers  to  a  data-producing  process,  it  is  the  produced  data  which  shall  be  returned  as  the  entity  in  the response  and  not  the  source  text  of  the  process,  unless  that  text  happens  to  be  the  output  of  the  process.
   For  any  given  HTTP  GET  API,  if  the  resource  is  found  on  the  server  then  it  must  return  HTTP  response  code  200  (OK)  –  along  with  response  body  which  is  usually  either  XML  or  JSON  content(due to their platform independent nature).
   In  case  resource  is  NOT  found  on  server  then  it  must  return  HTTP  response  code  404(NOT FOUND).  Similarly,  if  it  is  determined that  GET  request  itself  is  not  correctly  formed  then  server  will  return  HTTP  response  code  400(BAD REQUEST).
- HTTP  PUT
   - Use  PUT  APIs  primarily  to  update  existing  resource(if the resource does not exist then API may decide to create a new resource or not).  If  a  new  resource  has  been  created  by  the  PUT  API,  the  origin  server  MUST  inform  the  user  agent  via  the  HTTP  response  code 201(Created)  response  and  if  an  existing  resource  is  modified,  either  the  200(OK)  or  204(No Content)  response  codes  SHOULD  be  sent  to  indicate  successful  completion  of  the  request.
   If  the  request  passes  through  a  cache  and  the  Request-URI  identifies  one  or  more  currently  cached  entities,  those  entries  SHOULD be  treated  as  stale.  Responses  to  this  method  are  not  cacheable.
   The  difference  between  the  POST  and  PUT  APIs  can  be  observed  in  request  URIs.  POST  requests  are  made  on  resource  collections whereas  PUT  requests  are  made  on  an  individual  resource.
- HTTP  DELETE
   - As  the  name  applies,  DELETE  APIs  are  used  to  delete  resources(identified by the Request-URI).
     A  successful  response  of  DELETE  requests  SHOULD  be  HTTP  response  code  200(OK)  if  the  response  includes  an  entity  describing  the status,  202(Accepted)  if  the  action  has  been  queued,  or  204 (No Content)  if  the  action  has  been  performed  but  the  response  does  not include  an  entity.  DELETE  operations  are  idempotent.  If  you  DELETE  a  resource,  it’s  removed  from  the  collection  of  resource. Repeatedly  calling  DELETE  API  on  that  resource  will  not  change  the  outcome  –  however  calling  DELETE  on  a  resource  a  second  time will  return  a  404(NOT FOUND)  since  it  was  already  removed.  Some  may  argue  that  it  makes  DELETE  method  non-idempotent. It’s  a  matter of  discussion  and  personal  opinion.
     If the request passes through a cache and the Request-URI identifies one or more currently cached entities, those entries SHOULD be treated as stale. Responses to this method are not cacheable.

     Objects  in  REST  are  always  manipulated  from  the  URI.  It  is  the  URI  and  no  other  element  that  is  the  sole  identifier  of  each resource  in  this  REST  system.  The  URI  allows  us  to  access  the  information  in  order  to  change  or  delete  it,  or  for  example  to share  its  exact  location  with  third  parties. [(From Rest API Tutorial)](https://restfulapi.net/)
 
 **Advantages of REST for Developement**
  
 - Separation  between  the  client  and  the  server:  The  REST  protocol  totally  separates  the  user  interface  from  the  server  and  the data  storage.  This  has  some  advantages  when  making  developments.  For  example,  it  improves  the  portability  of  the  interface  to other  types  of  platforms,  it  increases  the  scalability  of  the  projects,  and  allows  the  different  components  of  the  developments  to  be  evolved  independently.
 - Visibility,  reliability  and  scalability.  The  separation  between  client  and  server  has  one  evident  advantage,  and  that  is  that each  development  team  can  scale  the  product  without  too  much  problem.  They  can  migrate  to  other  servers  or  make  all  kinds  of changes  in  the  database,  provided  the  data  from  each  request  is  sent  correctly.  The  separation  makes  it  easier  to  have  the  front  and  the  back  on  different  servers,  and   this  makes  the  apps  more  flexible  to  work  with.
 -  The  REST  API  is  always  independent  of  the  type  of  platform  or  languages:  The  REST  API  always  adapts  to  the  type  of  syntax or  platforms  being  used,  which  gives  considerable  freedom  when  changing  or  testing  new  environments  within  the  development.  With  a REST  API  you  can  have  PHP,  Java,  Python  or  Node.js servers.  The  only  thing  is  that  it  is  indispensable  that  the  responses  to the  requests  should  always  take  place  in  the  language  used  for  the  information  exchange,  normally  XML  or  JSON. [(from bbvaopen4u)](https://bbvaopen4u.com/en/actualidad/rest-api-what-it-and-what-are-its-advantages-project-development)

### Guided Practice

Complete the Links mentioned in the Materials sections. Follow step by step whatever mentioned in those turorials and try to cover it all.

### Independent Practice

Go through the link and follow the tutorial:
 - [Learn Rest API using Express.js and MySQL DB](https://www.codementor.io/julieisip/learn-rest-api-using-express-js-and-mysql-db-ldflyx8g2)

### Check for Understanding

Go through the given link and attempt the quiz:
- [RESTful online quiz](https://www.tutorialspoint.com/restful/restful_online_quiz.htm)



