const programStructureData = [
    {
        week: "Week 1",
        title: "Assessment and Psychoeducation",
        desc: "We begin by assessing the client’s addiction, introducing key treatment concepts, and setting initial recovery goals.",
        image: "https://s3-alpha-sig.figma.com/img/73e6/05f7/2500dd2061cf5e8380bf913fa72da938?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mbjn50~LOfdYUw7iEbq9nX2BilBYHy~eqqE-er7Mg7ZbRoo3EB0Vmk0jJB5VX8bhcoObfHabXkGyFGzWLOSBNslDLNa08wYEz4x1F01CLEy917jWk7kWdCiaRa5KtiQ3NEQlhvgty1XQMaTWNhO60Ar57scaiv5tJlHorgAd02AhHMetYUG5p~sPKLPG70UAU1gaUBGVSOdCsOQE~CRZ53lOHfa~Qm6brA3WbKRcRZC9EiYpnwpQ8rUs1rv9wHAo50HBnmjoBt2hoEOETr0giTRhe7w1ilJYwaw2Vmhyu49KyvEJzgzTFjGDTtsJGN2uonlPaxc6ihFbT~oXvsY2uA__"
    },
    {
        week: "Week 2",
        title: "Identifying Triggers and Mindful Acceptance",
        desc: "Develop mindfulness skills to identify personal triggers for substance use and manage them effectively.",
        image: "https://s3-alpha-sig.figma.com/img/d2db/d88e/ff0791248751da78238c974ac38c5284?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DqykZEoNe~sYWDRZlnS~GsJDOL5Bsa1ae7IW49z-Nbsr~y8f-733TSy~vch3mm16SmLfSvyFvpo76x~3CO3tIuIWBagmYPw3HdcVaHIzkOLE2y~ZfbNP0B0C2eVgwcpx5zsPaa07wbHjzlMpVInqSWlwGLoOk6MLATERIGChC8Wx130VDC4sm4a7JFt0V3gN4wXetNwuprjS3YfqfZ6~nVxH6YjzZjG-54E~1T0CxNQaZjtNtJSV7frYv87Nmpp7tsZT7qRC~Ta9833M1VinlfZEXgfBMt7jN20yPv-PNjo~hCOnqPIyFbhE9Bs4Na0hgeNVXOEUuunwBSVyTv2tPw__"
    },
    {
        week: "Week 3",
        title: "Distress Tolerance and Behavioral Activation",
        desc: "Learn techniques to tolerate distress while engaging in positive, rewarding activities.",
        image: "https://s3-alpha-sig.figma.com/img/40c6/96db/0494a4376ac5855f805e7ee52069b8c1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XlFpgausUlj90gaswGOzJbjfiP0lR0jRVHET7qdPQzsx4QCWcdPWR74hnnL1QVocI4T53AjWBENoZoPMYvJWFxWPTSGj5zIFryjIPOe3~4Z0StozpFknZMRfltgLn7sDFr9Isx3iqurvAZxjDsN9cJpxYx5FAQTivFj7-2N9V~7zNGJye3izP-p8Fx5DBiIZkEDoGzIMOkVKTcwngHimR4IzuBAas7rRKaKRAxzvDtrLq795w1t-I6MTeVkdpW3A-vgpGzrnoYJbP3zvMMxk2CAWboXiV8IWT8BFvjlSNPcFWJGxcQ6dp1XGPXJ5SALh5rll6YSFsdJz8u3kFl6VjA__"
    },
    {
        week: "Week 4",
        title: "Emotional Regulation and Challenging Thoughts",
        desc: "Improve emotional regulation and address cognitive distortions related to addiction.",
        image: "https://s3-alpha-sig.figma.com/img/2af2/c84e/9470f116d5d41762516f83934e3dc732?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b3tyxWCT3tXJunwgxABj2Bsq6yWJlto60gzsaiKFOvJoOhZs7kGu1fD7ej9Qd6QnDdeF1YmQEbpkZkNBCavIfiOC5kEFNce9Tqmcv9DqnB3mGDvs0ux~Lj0w2OFXWqH2aPpZAnapKo7kDP6Q6kleNJb2gkyieWI5T~6SFliKWuBMiXr3l6pDbd942CvlBVSg6IHNp840z0cXrHo6GajnB2GesBLrpEM9ZCEHLdHg4ijC7qlhz~oeW7eialNNKiapTFv1TL15UvGXhnwhZUJoK1spY9PEZbnx24ENmFMMOPAwIrQf5QlnVneb0uoL4VOkrpjEKN~J~nsp3bDIAiRy4A__"
    },
    {
        week: "Week 5",
        title: "Building Self-Efficacy and Addressing Avoidance",
        desc: "Boost confidence in sobriety while tackling avoidance behaviors that impede recovery.",
        image: "https://s3-alpha-sig.figma.com/img/9484/f860/8386c97b29e0f71e7f6b22c7800a9812?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HQ1QKyifoV1qmhbURKkCWvCxsZ0sAwQw2iaUq4jHNEtULUz~cIMY42HkMrUSDp2Tt5YaelnSyTEzbFx4wFGvLSNjN2f0fiSeft398kqMwy14gH11CYlEvsfdNDrjGErhq6rZo85bsEnlNprNGOEF4ur1Nkr7fF~kcv9UwQeaMwYFjqWkHNUmxV7GTYGCwkQqCqAsHNq4qGphuH1JrU6VKWacEufV3MuVTe0Cc4Yt~3dHdnbqnUxQAHGNmEv1qowqKibGq0S5pyBAzvx~Vls3-WqSIVY~VDexIY~WUYvPQ6Ci~i8LQRLCcPwaiKlWGI0J-9tWNO5rTOVfV43JLBGo-A__"
    },
    {
        week: "Week 6",
        title: "Interpersonal Effectiveness and Social Support",
        desc: "Strengthen communication skills and enhance the support network crucial for long-term recovery.",
        image: "https://s3-alpha-sig.figma.com/img/6ef7/c1ae/9775ccea0712d2a121506d7ba6b2c82e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cdpi5lkJTprW0yars~035asxBYlRWFFiVTkOqI5o890Ov8FeSn8qbF847eHPf4~CHWguZC8MXTDZWT~ORU1Mxb5jNv0~tb4LkrXYvAapd5NNwzmdTo-pJrs~4whdgg91Oxe93tnbz6SLCy2BahQZ5VCsyezqCSivQ72RdVqIQtv3YTwOmxPrQOan4dFVWCIXy48f90s-M0OfNIqfc8Z7XALm4RC-Q9soqFXcMQ1XBPYIgjNRILJY3AMpLt9QWM0TrK3TgmO8r66DdcFqfeI8q5V-5xVYIGyL8w5Ur5JLAr0lNHT2HeFVWwW1lPviULnQ2x~C53a0blLKzEq07H~5Ew__"
    },
    {
        week: "Week 7",
        title: "Relapse Prevention and Crisis Management",
        desc: "Create a personalized relapse prevention plan and practice crisis management strategies.",
        image: "https://s3-alpha-sig.figma.com/img/c6d8/90b3/d67cb871a41705aaafee5c8cdf154596?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O4A6WH9hSRXy8DETEqpcahAxlSxkgmQvsm6PkD0A6JTIogzFYJyfNBbQuIlWE6Jo9K3durgm4ntEJMa78NHi4PkfKtqVEG-YyTKBfCWIle-F9R4oiZMw7eO28AJXQl9Z8DId5DZPLMTtsBqPnvwM5PEVPkaNBWbswE7aBUqQ~Te6Ek11xive2GmpwbhFKrDwpbvl-faWFC3MEtuqIvp4zsB4vsf3jBKnltWFkvgZ8G4sKc7l1CCzI2DhDpVbedY-tcX1yp0hgGXugcRI-YFH0nQ7J7W-goJN-MIGHNpM8OUVGRZMDWbtmMmZe~hY6DhN0ILnPne9N8xuLe1ino8EDg__"
    },
    {
        week: "Week 8",
        title: "Integrating Skills and Graduation",
        desc: "Reflect on your journey, celebrate your progress, and devel op a long-term support plan as you transition out of the program.",
        image: "https://s3-alpha-sig.figma.com/img/dd89/c11b/adeacf69f20b0b78533d43215e8e74fc?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRMZApPdToWD0ko1GP~6zPlhAdACQrtfig9OO~DxDU2NAKbXfDtbpT0IH9uG7npd8LtYR2AkueGgli4-skLVqxG-pW9t881--7JRqtz6bc2izwS5rDwHldH-XxdzINkINMz9e4MfuRsYqWTjQX6Qt~-UIavKqJrusx5qoHOFfDXPpAvJF3eMEARnh7FNLC7iSk0xrmqHkRJdn0wON0ymVfnqQFciahmwYt3U7oHkstEajS2Nlrgl6-zUloBqzEkatgyEq9UyPqWQXjmsNDRLtBvlO4FuMzpbnTY7AeezonxBJBwtUZHhjY7JBSVhO9ojk-Hk9UcT99RpZEWRShSUpg__"
    },
];


export default programStructureData;