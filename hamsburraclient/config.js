import {
    @ButtonProperty,
    @CheckboxProperty,
    Color,
    @ColorProperty,
    @PercentSliderProperty,
    @SelectorProperty,
    @SwitchProperty,
    @TextProperty,
    @SliderProperty,
    @Vigilant,
} from 'Vigilance/index';


@Vigilant('hamsburraclient', 'hamsburraclient', {
    getCategoryComparator: () => (a, b) => {
        const categories = ["scappanegro"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    } 
})
class Settings {   
    @SliderProperty({
        name: 'Player Detection Distance',
        description: 'Customize the distance the macro detect players at',
        category: 'scappanegro',
        subcategory: 'Player Detection',
        min: 1,
        max: 30,
    })
    playerdistance = 5;

    @SwitchProperty({
        name: 'Player detection warp out ',
        description: 'Warps out if player detection is triggered',
        category: 'scappanegro',
        subcategory: 'Player Detection',
    })
    warpoutpd = false;