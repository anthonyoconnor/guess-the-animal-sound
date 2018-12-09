const sounds = [
    {
        "name": "bear",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_bear_groan_roar_01'/>`
    },
    {
        "name": "bear",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_bear_roar_grumble_01'/>`
    },
    {
        "name": "bear",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_bear_roar_small_01'/>`
    },
    {
        "name": "bird",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_bird_chickadee_chirp_1x_01'/>`
    },
    {
        "name": "bird",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_bird_chickadee_chirps_01'/>`
    },
    {
        "name": "bird",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_bird_forest_01'/>`
    },
    {
        "name": "bird",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_bird_forest_02'/>`
    },
    {
        "name": "bird",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_bird_forest_short_01'/>`
    },
    {
        "name": "bird",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_bird_robin_chirp_1x_01'/>`
    },
    {
        "name": "cat",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_cat_angry_meow_1x_01'/>`
    },
    {
        "name": "cat",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_cat_angry_meow_1x_02'/>`
    },
    {
        "name": "cat",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_cat_angry_screech_1x_01'/>`
    },
    {
        "name": "cat",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_cat_long_meow_1x_01'/>`
    },
    {
        "name": "cat",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_cat_meow_1x_01'/>`
    },
    {
        "name": "cat",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_cat_meow_1x_02'/>`
    },
    {
        "name": "cat",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_cat_purr_01'/>`
    },
    {
        "name": "cat",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_cat_purr_02'/>`
    },
    {
        "name": "cat",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_cat_purr_03'/>`
    },
    {
        "name": "cat",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_cat_purr_meow_01'/>`
    },
    {
        "name": "chicken",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_chicken_cluck_01'/>`
    },
    {
        "name": "crow",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_crow_caw_1x_01'/>`
    },
    {
        "name": "crow",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_crow_caw_1x_02'/>`
    },
    {
        "name": "dog",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_dog_med_bark_1x_01'/>`
    },
    {
        "name": "dog",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_dog_med_bark_1x_02'/>`
    },
    {
        "name": "dog",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_dog_med_bark_1x_03'/>`
    },
    {
        "name": "dog",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_dog_med_bark_2x_01'/>`
    },
    {
        "name": "dog",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_dog_med_bark_2x_02'/>`
    },
    {
        "name": "dog",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_dog_med_bark_2x_03'/>`
    },
    {
        "name": "dog",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_dog_med_bark_growl_01'/>`
    },
    {
        "name": "dog",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_dog_med_growl_1x_01'/>`
    },
    {
        "name": "dog",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_dog_med_woof_1x_01'/>`
    },
    {
        "name": "dog",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_dog_small_bark_2x_01'/>`
    },
    {
        "name": "elephant",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_elephant_01'/>`
    },
    {
        "name": "elephant",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_elephant_02'/>`
    },
    {
        "name": "elephant",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_elephant_03'/>`
    },
    {
        "name": "elephant",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_elephant_04'/>`
    },
    {
        "name": "elephant",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_elephant_05'/>`
    },
    {
        "name": "horse",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_horse_gallop_4x_01'/>`
    },
    {
        "name": "horse",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_horse_gallop_4x_02'/>`
    },
    {
        "name": "horse",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_horse_gallop_4x_03'/>`
    },
    {
        "name": "horse",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_horse_huff_whinny_01'/>`
    },
    {
        "name": "horse",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_horse_neigh_01'/>`
    },
    {
        "name": "horse",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_horse_neigh_low_01'/>`
    },
    {
        "name": "horse",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_horse_whinny_01'/>`
    },
    {
        "name": "horse",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_horse_whinny_02'/>`
    },
    {
        "name": "horse",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_horse_whinny_03'/>`
    },
    {
        "name": "lion",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_lion_roar_01'/>`
    },
    {
        "name": "lion",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_lion_roar_02'/>`
    },
    {
        "name": "lion",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_lion_roar_03'/>`
    },
    {
        "name": "monkey",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_monkey_calls_3x_01'/>`
    },
    {
        "name": "monkey",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_monkey_chimp_01'/>`
    },
    {
        "name": "monkey",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_monkeys_chatter_01'/>`
    },
    {
        "name": "rat",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_rat_squeak_2x_01'/>`
    },
    {
        "name": "rat",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_rat_squeaks_01'/>`
    },
    {
        "name": "raven",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_raven_caw_1x_01'/>`
    },
    {
        "name": "raven",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_raven_caw_2x_01'/>`
    },
    {
        "name": "rooster",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_rooster_crow_01'/>`
    },
    {
        "name": "rooster",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_rooster_crow_02'/>`
    },
    {
        "name": "sheep",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_sheep_baa_01'/>`
    },
    {
        "name": "sheep",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_sheep_bleat_01'/>`
    },
    {
        "name": "sheep",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_sheep_bleat_02'/>`
    },
    {
        "name": "sheep",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_sheep_bleat_03'/>`
    },
    {
        "name": "turkey",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_turkey_gobbling_01'/>`
    },
    {
        "name": "wolf",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_wolf_howl_01'/>`
    },
    {
        "name": "wolf",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_wolf_howl_02'/>`
    },
    {
        "name": "wolf",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_wolf_howl_03'/>`
    },
    {
        "name": "wolf",
        "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_wolf_young_howl_01'/>`
    }
];

module.exports = sounds;