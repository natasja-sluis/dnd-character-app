export const quizData = {
    scoreOrder: [
        "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"
    ],
    questions: [
        {
            question: 'You are on a quest to find a mythical cave, together with fellow adventurers. What is your motivation for going on this quest?',
            answers: [
                {
                    option: 'I want to find ancient treasures that make me rich and/or powerful.',
                    scores: [3, 3, 1, 1, 3, 1, 2, 1, 5, 3, 5, 3]
                },
                {
                    option: 'I heard it was full of evils, and I want to rid the world of it.',
                    scores: [5, 1, 4, 3, 4, 3, 5, 3, 2, 4, 2, 3]
                },
                {
                    option: 'I want to explore the world and find new interesting tales or knowledge.',
                    scores: [2, 5, 2, 5, 1, 3, 1, 5, 2, 2, 3, 5]
                },
                {
                    option: 'I was told to go here by my superior, or a divine calling.',
                    scores: [1, 1, 5, 1, 5, 2, 4, 1, 3, 2, 3, 3]
                },
                {
                    option: 'I’m just tagging along with my friends!',
                    scores: [4, 5, 3, 4, 2, 5, 2, 4, 2, 3, 2, 1]
                },
            ]
        },
        {
            question: 'As an experienced adventurer, you’re always prepared for a fight. What is your preferred way to defend yourself?',
            answers: [
                {
                    option: 'I hit the bad things as hard as I can, until they stop moving.',
                    scores: [5, 2, 1, 2, 4, 4, 4, 2, 2, 2, 2, 1]
                },
                {
                    option: 'I use my shield to subdue anyone who attacks me or anyone near me.',
                    scores: [1, 3, 5, 3, 4, 3, 5, 1, 1, 1, 1, 2]
                },
                {
                    option: 'I get my point across with as many arrows or daggers as necessary, sometimes more.',
                    scores: [2, 2, 1, 1, 3, 2, 1, 4, 5, 2, 2, 1]
                },
                {
                    option: 'I focus on my spellcasting aid to cast all sorts of magic to help my allies and strategically control the battle.',
                    scores: [1, 5, 4, 4, 1, 1, 2, 3, 2, 3, 4, 5]
                },
                {
                    option: 'I need only to trust myself, I AM the weapon.',
                    scores: [4, 1, 2, 4, 2, 5, 2, 2, 2, 5, 3, 1]
                },
            ]
        },
        {
            question: 'The cave you’re seeking is hidden, deep within a dark, foggy swamp. If you’re not careful, you won’t be coming out alive. How do you proceed?',
            answers: [
                {
                    option: 'I carefully plot our course, using a map of the area.',
                    scores: [1, 2, 2, 1, 4, 2, 2, 2, 3, 2, 2, 4]
                },
                {
                    option: 'I ask the locals for help.',
                    scores: [3, 5, 4, 1, 3, 2, 4, 1, 2, 3, 2, 1]
                },
                {
                    option: 'I’m naturally aware of my surroundings and not scared of the fog. I will guide us through this area.',
                    scores: [4, 1, 1, 5, 1, 4, 1, 5, 3, 1, 1, 1]
                },
                {
                    option: 'I probably know a spell that leads us directly to our destination.',
                    scores: [1, 3, 2, 2, 1, 1, 1, 3, 1, 4, 3, 5]
                },
                {
                    option: 'I ask for guidance from a higher power, to protect us on this journey.',
                    scores: [1, 2, 4, 1, 1, 2, 4, 1, 1, 2, 4, 2]
                },
            ]
        },
        {
            question: 'After three days, you find the entrance of the cave. The inside is dark and smells funky. As you peer inside a cold draft sends chills down your spine. What do you do?',
            answers: [
                {
                    option: 'I like the dark and step inside comfortably. What can’t see me, can’t hurt me, after all.',
                    scores: [2, 1, 1, 2, 1, 3, 1, 5, 5, 2, 5, 1]
                },
                {
                    option: 'I clasp a talisman in my hands and utter a quick prayer for courage.',
                    scores: [1, 3, 5, 1, 1, 2, 3, 3, 2, 3, 1, 5]
                },
                {
                    option: 'I loudly announce my presence, to chase off any creatures that could be lurking in the dark.',
                    scores: [5, 4, 3, 2, 4, 1, 5, 1, 1, 4, 3, 1]
                },
                {
                    option: 'I start singing a jaunty tune to calm myself and those around me.',
                    scores: [3, 5, 1, 4, 1, 2, 1, 1, 1, 4, 1, 1,]
                },
                {
                    option: 'I get ready to strike anything that moves as I go in.',
                    scores: [3, 1, 4, 3, 5, 4, 3, 3, 4, 2, 3, 3]
                },
            ]
        },
        {
            question: 'The tunnel is dark and damp, but empty so far. It winds down further and further into the cave until you come up to two large stone doors, covered in strange symbols that give off an eerie feeling. They block your way forward. What do you do?',
            answers: [
                {
                    option: 'I go up to the door and try to force it open.',
                    scores: [5, 1, 2, 2, 4, 1, 4, 1, 2, 3, 1, 1]
                },
                {
                    option: 'I don’t trust these doors. I start looking for traps or signs of magic.',
                    scores: [1, 3, 4, 4, 3, 5, 2, 4, 3, 2, 3, 4]
                },
                {
                    option: 'I try to find a way around and spot a small creature. Maybe there is a hole somewhere?',
                    scores: [2, 2, 1, 4, 1, 2, 1, 4, 2, 2, 1, 1]
                },
                {
                    option: 'I inspect the doors to see if there is a way they can be opened. Could there be a ritual or a key involved?',
                    scores: [1, 2, 4, 2, 1, 3, 2, 3, 4, 2, 4, 5]
                },
                {
                    option: 'I start saying random words in the hope I’ll guess the password.',
                    scores: [3, 5, 1, 1, 3, 2, 3, 2, 4, 5, 4, 3]
                },
            ]
        },
        {
            question: 'As you are trying to deal with the doors, you suddenly hear a low growl behind you. You turn around and see a large beast with matted fur and glowing eyes approaching you. What do you do?',
            answers: [
                {
                    option: 'I try to soothe the beast and approach it carefully. Who is a lost little puppy?',
                    scores: [2, 4, 4, 4, 1, 3, 1, 5, 2, 2, 4, 1]
                },
                {
                    option: 'I do not hesitate and immediately attack the beast.',
                    scores: [4, 1, 2, 1, 5, 2, 4, 1, 4, 1, 3, 3]
                },
                {
                    option: 'I try to run away to a safer distance. I don’t want to be anywhere near those claws!',
                    scores: [1, 4, 1, 2, 2, 1, 1, 3, 4, 5, 4, 5]
                },
                {
                    option: 'I intimidate it with a growl of my own, that’ll teach it a lesson.',
                    scores: [5, 3, 1, 5, 2, 1, 3, 1, 1, 4, 2, 1]
                },
                {
                    option: 'I move in front of my friends and ready myself for when the beast attacks.',
                    scores: [2, 1, 5, 2, 4, 4, 5, 2, 1, 1, 1, 1]
                },
            ]
        },
        {
            question: 'After you have dealt with the beast, the doors suddenly open with a loud scraping sound. It reveals an empty chamber,  except for a beautifully carved pedestal in the center. On top of it, lies a ring, dimly sparkling in the low light. The room and pedestal are covered the same symbols as the door. What do you do?',
            answers: [
                {
                    option: 'I walk in and ignore the ring, what use do I have for jewelry?',
                    scores: [4, 1, 3, 4, 2, 5, 2, 3, 1, 1, 1, 2]
                },
                {
                    option: 'I quickly pocket the ring before anyone notices.',
                    scores: [2, 4, 1, 2, 2, 1, 2, 2, 5, 1, 4, 1,]
                },
                {
                    option: 'I investigate the symbols. What do they mean?',
                    scores: [1, 2, 4, 2, 3, 1, 4, 3, 2, 3, 3, 4]
                },
                {
                    option: 'I get lost in thought, imagining all the possible uses of the ring.',
                    scores: [1, 5, 1, 1, 1, 1, 1, 1, 3, 2, 5, 4]
                },
                {
                    option: 'I look for any signs of life; this room seems strangely quiet.',
                    scores: [2, 3, 3, 5, 4, 3, 2, 4, 1, 2, 3, 4]
                },
            ]
        }, {
            question: 'After you have dealt with the beast, the doors suddenly open with a loud scraping sound. It reveals an empty chamber,  except for a beautifully carved pedestal in the center. On top of it, lies a ring, dimly sparkling in the low light. The room and pedestal are covered the same symbols as the door. What do you do?',
            answers: [
                {
                    option: 'I walk in and ignore the ring, what use do I have for jewelry?',
                    scores: [4, 1, 3, 4, 2, 5, 2, 3, 1, 1, 1, 2]
                },
                {
                    option: 'I quickly pocket the ring before anyone notices.',
                    scores: [2, 4, 1, 2, 2, 1, 2, 2, 5, 1, 4, 1,]
                },
                {
                    option: 'I investigate the symbols. What do they mean?',
                    scores: [1, 2, 4, 2, 3, 1, 4, 3, 2, 3, 3, 4]
                },
                {
                    option: 'I get lost in thought, imagining all the possible uses of the ring.',
                    scores: [1, 5, 1, 1, 1, 1, 1, 1, 3, 2, 5, 4]
                },
                {
                    option: 'I look for any signs of life; this room seems strangely quiet.',
                    scores: [2, 3, 3, 5, 4, 3, 2, 4, 1, 2, 3, 4]
                },
            ]
        },  {
            question: 'After you have dealt with the beast, the doors suddenly open with a loud scraping sound. It reveals an empty chamber,  except for a beautifully carved pedestal in the center. On top of it, lies a ring, dimly sparkling in the low light. The room and pedestal are covered the same symbols as the door. What do you do?',
            answers: [
                {
                    option: 'I walk in and ignore the ring, what use do I have for jewelry?',
                    scores: [4, 1, 3, 4, 2, 5, 2, 3, 1, 1, 1, 2]
                },
                {
                    option: 'I quickly pocket the ring before anyone notices.',
                    scores: [2, 4, 1, 2, 2, 1, 2, 2, 5, 1, 4, 1,]
                },
                {
                    option: 'I investigate the symbols. What do they mean?',
                    scores: [1, 2, 4, 2, 3, 1, 4, 3, 2, 3, 3, 4]
                },
                {
                    option: 'I get lost in thought, imagining all the possible uses of the ring.',
                    scores: [1, 5, 1, 1, 1, 1, 1, 1, 3, 2, 5, 4]
                },
                {
                    option: 'I look for any signs of life; this room seems strangely quiet.',
                    scores: [2, 3, 3, 5, 4, 3, 2, 4, 1, 2, 3, 4]
                },
            ]
        },  {
            question: 'After you have dealt with the beast, the doors suddenly open with a loud scraping sound. It reveals an empty chamber,  except for a beautifully carved pedestal in the center. On top of it, lies a ring, dimly sparkling in the low light. The room and pedestal are covered the same symbols as the door. What do you do?',
            answers: [
                {
                    option: 'I walk in and ignore the ring, what use do I have for jewelry?',
                    scores: [4, 1, 3, 4, 2, 5, 2, 3, 1, 1, 1, 2]
                },
                {
                    option: 'I quickly pocket the ring before anyone notices.',
                    scores: [2, 4, 1, 2, 2, 1, 2, 2, 5, 1, 4, 1,]
                },
                {
                    option: 'I investigate the symbols. What do they mean?',
                    scores: [1, 2, 4, 2, 3, 1, 4, 3, 2, 3, 3, 4]
                },
                {
                    option: 'I get lost in thought, imagining all the possible uses of the ring.',
                    scores: [1, 5, 1, 1, 1, 1, 1, 1, 3, 2, 5, 4]
                },
                {
                    option: 'I look for any signs of life; this room seems strangely quiet.',
                    scores: [2, 3, 3, 5, 4, 3, 2, 4, 1, 2, 3, 4]
                },
            ]
        },
    ]
}