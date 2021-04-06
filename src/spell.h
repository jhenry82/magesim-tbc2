#include <string>

namespace spell
{

    enum ID : int
    {
        ARCANE_BLAST = 30451,
        ARCANE_MISSILES = 25345,
        FROSTBOLT = 25304,
        FIREBALL = 25306,
        SCORCH = 10207,
        SCORCH_R1 = 2948,
        PYROBLAST = 18809,
        LIGHTNING_CAPACITOR = 28785,
    };

    enum Result : int
    {
        HIT,
        CRIT,
        MISS
    };

    class Spell
    {

    public:
        ID id;
        std::string name;
        double cost = 0;
        double min_dmg = 0;
        double max_dmg = 0;
        double cast_time = 0;
        double coeff = 1;
        bool channeling = false;
        bool proc = false;
        int ticks = 0;
        School school;

        Result result;
        double dmg = 0;
        double actual_cost = 0;
        int tick = 0;
        bool done = false;

    };

    class ArcaneBlast : public Spell
    {

    public:
        ArcaneBlast()
        {
            id = ARCANE_BLAST;
            name = "Arcane Blast";
            cost = 195;
            min_dmg = 648;
            max_dmg = 752;
            cast_time = 2.5;
            coeff = 2.5/3.5;
            school = SCHOOL_ARCANE;
        }

    };

    class ArcaneMissiles : public Spell
    {

    public:
        ArcaneMissiles()
        {
            id = ARCANE_MISSILES;
            name = "Arcane Missiles";
            cost = 655;
            min_dmg = 234;
            max_dmg = 234;
            cast_time = 5;
            coeff = 5/3.5;
            school = SCHOOL_ARCANE;
            channeling = true;
            ticks = 5;
        }

    };

    class Frostbolt : public Spell
    {

    public:
        Frostbolt()
        {
            id = FROSTBOLT;
            name = "Frostbolt";
            cost = 290;
            min_dmg = 527;
            max_dmg = 568;
            cast_time = 3;
            coeff = 3/3.5 * 0.95;
            school = SCHOOL_FROST;
        }

    };

    class Fireball : public Spell
    {

    public:
        Fireball()
        {
            id = FIREBALL;
            name = "Fireball";
            cost = 410;
            min_dmg = 611;
            max_dmg = 776;
            cast_time = 3.5;
            coeff = 1;
            school = SCHOOL_FIRE;
        }

    };

    class Scorch : public Spell
    {

    public:
        Scorch()
        {
            id = SCORCH;
            name = "Scorch";
            cost = 150;
            min_dmg = 241;
            max_dmg = 284;
            cast_time = 1.5;
            coeff = 1.5/3.5;
            school = SCHOOL_FIRE;
        }

    };

    class ScorchR1 : public Spell
    {

    public:
        ScorchR1()
        {
            id = SCORCH_R1;
            name = "Scorch (Rank 1)";
            cost = 50;
            min_dmg = 56;
            max_dmg = 69;
            cast_time = 1.5;
            coeff = 1.5/3.5 * 0.55; // Significant downranking penalty applies
            school = SCHOOL_FIRE;
        }

    };

    class Pyroblast : public Spell
    {

    public:
        Pyroblast()
        {
            id = PYROBLAST;
            name = "Pyroblast";
            cost = 440;
            min_dmg = 735;
            max_dmg = 926;
            cast_time = 6;
            coeff = 1.15;
            school = SCHOOL_FIRE;
        }

    };

    class LightningCapacitor : public Spell
    {

    public:
        LightningCapacitor()
        {
            id = LIGHTNING_CAPACITOR;
            name = "Lightning Capacitor";
            cost = 0;
            min_dmg = 694;
            max_dmg = 807;
            cast_time = 0;
            school = SCHOOL_NATURE;
            coeff = 0;
            proc = true;
        }
    };

}