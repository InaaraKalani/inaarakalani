export const poetryHeroTexts = [
  "The curse of my writing has always been",
  "People thinking I'm writing about them / for them / to them.",
  "I'm not.",
  "",
  "",
  "I just wrote what I felt in a moment—",
  "at my highest, lowest, and in between—",
  "and I share them",
  "because I like the attention.",
  "",
  "",
  "And if it's really good,",
  "then I like for people to be able to relate to me.",
  "",
  "My writings are my thoughts, my journey and my emotions.",
  "So... get over yourself.",
  "It's not about you ☺️",
];

export enum PoetryType {
  Poetry = "poetry",
  Song = "song",
}

export type FeaturedPoetry = {
  title: string;
  content: string;
  year: string;
  type: PoetryType;
  tags: string[];
};

export const POETRY_PREVIEW_LENGTH = 200;

export const featuredPoetry: FeaturedPoetry[] = [
  // The Sea of Serpent
  {
    title: "The Sea of Serpent",
    year: "March 2020",
    type: PoetryType.Poetry,
    tags: ["Mythical Allegory", "Social Abandonment", "Empathy vs. Fear"],
    content: `I can see the story
In a village of spirit
I can tell you what I see
In a sea of serpents.

Like a tornado crawling under the sky
Lights shine in the eyes of the monster
You can still look in her stormy eyes
And see the prettiest lady she used to be

At one point, she used to be
The queen of this throne
What sudden fate engulfed her
Into a mindless monster?

That’s the view of our world
We used to be the same as her
Pity, the villagers are scared of her
For they fear crossing her river.

I can see the story
In a village of spirit
I can tell you what I see
In a sea of serpents.

She frightens the people of the village
With her wild eyes, and her too-large size
But the fearful moaning heard every night
Is the crying that blinds her own sight

They don’t know she is blind
What fate engulfed mankind?
Such pain there is for someone
I’ve never met and never known.

You’d understand what I mean
If you heard her weeping too
But I’ll describe the sounds to you
The ones every villager recognizes in their sleep

A tortured, hiccupping cry, and a gentle, distant humming
With which the sea responds to her every time
As though he understands her pain
As though he’s tired of listening to her cry

I can see the story
In a village of spirit
I can tell you what I see
In a sea of serpents.

Sometimes it’s different, her moaning—
A frightful cry, full of angry accusations
At villagers who slept peacefully in their homes
Who didn’t come when she called in agony

Do you know what made her the way she is?
It was the selfish villagers like us
Who left her rotting inside the warhouse
And never came to see what became of her

For eighteen years and two centuries, she’s been crying
And the people never came to comfort her
But closed their curtains and bolted their doors
As though a storm was scheduled to pass

I know what would save her—
What could have saved her all along:
A tear of sympathy from a single villager
And she would rest in peace forever

For eighteen years and two centuries
She’s been crying.
For eighty-two years and a few more centuries
She’ll cry still.

I can see the story
In a village of spirit
I can tell you what I see
In a sea of serpents.`,
  },
  // The World Needs You
  {
    title: "The World Needs You",
    year: "June 2017",
    type: PoetryType.Song,
    tags: [
      "Hope & Healing",
      "Self-Worth & Identity",
      "Resilience in Adversity",
    ],
    content: `Lost ourselves on the path we grew up
Suddenly, the town feels full of lies
Changed the people we always loved
Suddenly, the world seeks no more highs

But—

I know there is more to the world we all created together
As if, the melody of the song they wrote lives on forever

But life is not forever
Never has been
And love is forever
And always has been

You’ll have to stand strong
Be on your own
Because—
The world needs you.
The world needs you.

All of a sudden, this feels like a whole new game
But you don’t want to play the part
All of a sudden, the music hits a very high note
But you don’t know how to play the keys anymore

I know there is more to the world we all created together
And sometimes, you feel like you’re losing the edge
But you know, a strong bird survives all weather

And life is not forever
Never has been
But hope is forever
And always has been

You’ll have to hold on to it
You know you were born for it
Because—
The world needs you.
The world needs you.

You’re moving on, but it feels like you’re failing
For so long, the world’s been feeling so hopeless
You wish to die, but you know you can’t
For so long, you’ve doubted yourself

They voice the things you know you lack
And you know they’re right to the core
But do they know all the things you’re good at?
You’re the survivor’s courage in a world at war against you

I know there is more to the world we all created together
And sometimes they don’t lie because they hate you
They lie because they think they’re true
And they love you

Because—

They know you are the melody of a song
We wrote sitting around firewood
And they know you are the heart of
The soul to their flames

Lies are not forever
Never have been
And faith is forever
And always has been

So you’re going to listen to their song
But dance to your own tone
Because—
The world needs you.
The world needs you.
(World needs you)
The world needs you.`,
  },
];
