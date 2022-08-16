# PlayerCharacters

**_code currently under rewrite for new Redux update and database change_**


## The Cast
- lists player characters
![thecast](https://user-images.githubusercontent.com/47723396/184944208-5b5ba222-2c49-433e-9c02-92d41e357d91.JPG)
- bootstrap used for web design
- maps json data to create character list display
```js
import characters from '../characters'             // imports json data
import Character from '../components/Character'    // imports character component used to display character info
// ... (code omitted for example) ...
// maps each character's data from the imported json to the imported character component: creates the list of characters
{characters.map((character) => (
   <Col sm={12} md={6} lg={4} xl={3}>
      <Character character={character} />
   </Col>
))}
```
- clicking on a character's name or image navigates to that character's details page
```js
import { Link }  from 'react-router-dom'
// ... (code omitted for example) ...
<Link to={`/character/${character._id}`}>
   <Card.Img src={character.image} variant='top' />
</Link>
```

## The Crew
- lists npcs (non-player characters)
![thecrew](https://user-images.githubusercontent.com/47723396/184944022-c35ae0d7-50ac-4fe2-853c-113d66fd3614.JPG)   
- maps json data to create npc list display
- information is rendered differently depending on if that information is present in the json data
```js
<p>
   {npc.relationships.status !== false ? 
      <> {npc.relationships.type} {npc.relationships.relationship} </>
      : <> - </>
   }
</p>
```

## Character Details
- displays character info and stats
![mindyfull](https://user-images.githubusercontent.com/47723396/184939321-8c0f8c33-65dd-4da1-8030-84b7e2044567.JPG)
- information is rendered differently depending on if that information is present in the json data
```js
// character subclass only displayed if not null
<span>Lvl {character.level} {character.class} {character.subclass != null && <>- {character.subclass}</>}</span>
```

## Navbar
- can navigate between 'The Cast' and 'The Crew' pages using the navigation bar in the header
```js
import { Container, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
// ... (code omitted for example) ...
<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
   <Container>
      <LinkContainer to="/">
         <Navbar.Brand>The Character List</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="ms-auto">
            <LinkContainer to="/">
               <Nav.Link>Player Characters</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/npcs">
               <Nav.Link>NPCs</Nav.Link>
            </LinkContainer>
         </Nav>
      </Navbar.Collapse>
   </Container>
</Navbar>
```

## Responsive Design
- website layout responds to screen size
- when window narrows, navbar collapses and is toggled by icon   
  * full navbar, displays 4 across   
![navbar1](https://user-images.githubusercontent.com/47723396/184942060-f50f7025-86ee-4983-adf1-2c8dea64e044.JPG)   
  * full navbar, displays 3 across   
![navbar4](https://user-images.githubusercontent.com/47723396/184943632-a9ff4aac-ddfd-4c40-ac3c-69eba9f732b3.JPG)   
  * collapsed navbar, displays 2 across   
![navbar2](https://user-images.githubusercontent.com/47723396/184942067-271498e1-7061-4f0b-987c-d55e43a75356.JPG)   
  * collapsed navbar, displays 1 across   
![navbar3](https://user-images.githubusercontent.com/47723396/184942077-cc3dabb1-0116-43a7-9e89-89e3028c94c1.JPG)   
- depending on screen size, skills are reduced from *icon and title* to *icon only*
![mindy3](https://user-images.githubusercontent.com/47723396/184939889-9d7f00bd-2dcf-4dbf-b22f-17a7e16eb543.JPG)
- when narrow, side-by-side display for character details is replaced by vertical display
![mindy4](https://user-images.githubusercontent.com/47723396/184939899-46098359-f627-44f4-8bf2-87ab80fff50c.JPG)

## Footer
![footer](https://user-images.githubusercontent.com/47723396/184943358-eee4608b-3183-4d8f-9260-3d376dbb2ef6.JPG)
- footer at the bottom of every page displays copyright info and credits
