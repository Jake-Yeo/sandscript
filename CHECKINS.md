# Check-in 1:
Description of planned DSL:
- What is the high-level purpose of your DSL? What will it enable users to do?
    - Build out a game with interactable elements based on the game https://dan-ball.jp/en/javagame/dust/
    - Users should be able to define results of interactions
    - Define actual elements/types
    - Given base level elements, all users can edit and interact with them
- What kind of users is it aimed at? 
    - Creative users
    - Minecraft-type gamers
    - Sim gamers
    - Kids interested in learning to program
- What are the key richer features of your DSL? 
    - Conditionals - Define how elements interact; example: if wood touches fire…
    - Mutable variables - Editing/modifying the different elements; example: specifying the rate at which ice melts into water when near heat sources
    - Classes/Inheritance
        - Define elements that share properties; example: air and poison gas inherit from gases 
    - Functions
        - Reusable code, used in classes; example: users can define a function melt that turns solid elements into liquid ones
    - Loops
        - Allows users to iterate through nearby elements 
- Which features can be combined to interact in useful or creative ways?
    - All of them, since the DSL is inherently designed for people to be creative
    - Example: Functions can use mutable variables and conditionals to alter the state of elements

<br>

Example snippets of your DSL that illustrate at least each rich feature, and any interesting interaction between those:

```
template-element Element:
    has position-x with 0
    has position-y with 0
    has color

    has function tick

    has function is-there-something-below:
        let elements be get-all-elements() # probably language-implemented function

        for-every element in elements:
            if (element.position-y - 1) equals position-y:
                give true

        give false

template-element Solid is like Element:
    has function tick:
        fall()

    has function fall:
        bool something-is-below = is-there-something-below()

        if not something-is-below:
            let position-y be position-y - 1

function flow needs element:
    # do something with element that makes it flow properly with other liquids here
    do-nothing

template-element Liquid is like Element:
    has function tick:
        flow()

template-element Gas is like Element:
    has function tick:
        do-nothing

template-element Energy is like Element:
    has intensity = 10

    has function tick:
        if intensity greater-than 0:
            let intensity be intensity - 1
        else
            disappear()

element Water is like Liquid:
    let color be Color.blue

element Lava is like Liquid:
    let color be Color.red

element Stone is like Solid:
    let color be Color.grey

element Ice is like Solid:
    let color be Color.light-blue
    let health be 50
    let melting-speed be 2

    has function tick:
        parent()

        let elements-in-range be get-elements-in-range(5)

        for-every element in elements-in-range:
            if element is Lava or element is Fire:
                let health be health - melting-speed

        if health equals 0:
            convert-to(Water)

element Fire is like Energy:
    let color be Color.orange

```

<br>

What plans have your team made for collaboration (timing of work, communication, meetings/tools used, etc.):
- Make plans and discuss via Discord
- Use google forms and polling sites to vote on ideas
- Conduct in person meetings on Mondays at 2PM

<br>

Note any planned follow-up tasks or features still to design:
1. Come up with a proper concrete syntax for the language
2. Plan the modules and provision work:
    - Physics engine
    - Entities
    - Interpreter
    - Parser
3. Plan User Stories

<br>
TA Notes:
- Make sure that users are able to code an unbounded number of elements and interactions programatically
