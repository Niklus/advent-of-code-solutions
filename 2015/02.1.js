// Use an online tool to turn the given csv input into json

var input = [
	{
		"values": "4x23x21"
	},
	{
		"values": "22x29x19"
	},
	{
		"values": "11x4x11"
	},
	{
		"values": "8x10x5"
	},
	{
		"values": "24x18x16"
	},
	{
		"values": "11x25x22"
	},
	{
		"values": "2x13x20"
	},
	{
		"values": "24x15x14"
	},
	{
		"values": "14x22x2"
	},
	{
		"values": "30x7x3"
	},
	{
		"values": "30x22x25"
	},
	{
		"values": "29x9x9"
	},
	{
		"values": "29x29x26"
	},
	{
		"values": "14x3x16"
	},
	{
		"values": "1x10x26"
	},
	{
		"values": "29x2x30"
	},
	{
		"values": "30x10x25"
	},
	{
		"values": "10x26x20"
	},
	{
		"values": "1x2x18"
	},
	{
		"values": "25x18x5"
	},
	{
		"values": "21x3x24"
	},
	{
		"values": "2x5x7"
	},
	{
		"values": "22x11x21"
	},
	{
		"values": "11x8x8"
	},
	{
		"values": "16x18x2"
	},
	{
		"values": "13x3x8"
	},
	{
		"values": "1x16x19"
	},
	{
		"values": "19x16x12"
	},
	{
		"values": "21x15x1"
	},
	{
		"values": "29x9x4"
	},
	{
		"values": "27x10x8"
	},
	{
		"values": "2x7x27"
	},
	{
		"values": "2x20x23"
	},
	{
		"values": "24x11x5"
	},
	{
		"values": "2x8x27"
	},
	{
		"values": "10x28x10"
	},
	{
		"values": "24x11x10"
	},
	{
		"values": "19x2x12"
	},
	{
		"values": "27x5x10"
	},
	{
		"values": "1x14x25"
	},
	{
		"values": "5x14x30"
	},
	{
		"values": "15x26x12"
	},
	{
		"values": "23x20x22"
	},
	{
		"values": "5x12x1"
	},
	{
		"values": "9x26x9"
	},
	{
		"values": "23x25x5"
	},
	{
		"values": "28x16x19"
	},
	{
		"values": "17x23x17"
	},
	{
		"values": "2x27x20"
	},
	{
		"values": "18x27x13"
	},
	{
		"values": "16x7x18"
	},
	{
		"values": "22x7x29"
	},
	{
		"values": "17x28x6"
	},
	{
		"values": "9x22x17"
	},
	{
		"values": "10x5x6"
	},
	{
		"values": "14x2x12"
	},
	{
		"values": "25x5x6"
	},
	{
		"values": "26x9x10"
	},
	{
		"values": "19x21x6"
	},
	{
		"values": "19x4x27"
	},
	{
		"values": "23x16x14"
	},
	{
		"values": "21x17x29"
	},
	{
		"values": "24x18x10"
	},
	{
		"values": "7x19x6"
	},
	{
		"values": "14x15x10"
	},
	{
		"values": "9x10x19"
	},
	{
		"values": "20x18x4"
	},
	{
		"values": "11x14x8"
	},
	{
		"values": "30x15x9"
	},
	{
		"values": "25x12x24"
	},
	{
		"values": "3x12x5"
	},
	{
		"values": "12x21x28"
	},
	{
		"values": "8x23x10"
	},
	{
		"values": "18x26x8"
	},
	{
		"values": "17x1x8"
	},
	{
		"values": "2x29x15"
	},
	{
		"values": "3x13x28"
	},
	{
		"values": "23x20x11"
	},
	{
		"values": "27x25x6"
	},
	{
		"values": "19x21x3"
	},
	{
		"values": "30x22x27"
	},
	{
		"values": "28x24x4"
	},
	{
		"values": "26x18x21"
	},
	{
		"values": "11x7x16"
	},
	{
		"values": "22x27x6"
	},
	{
		"values": "27x5x26"
	},
	{
		"values": "4x10x4"
	},
	{
		"values": "4x2x27"
	},
	{
		"values": "2x3x26"
	},
	{
		"values": "26x29x19"
	},
	{
		"values": "30x26x24"
	},
	{
		"values": "8x25x12"
	},
	{
		"values": "16x17x5"
	},
	{
		"values": "13x2x3"
	},
	{
		"values": "1x30x22"
	},
	{
		"values": "20x9x1"
	},
	{
		"values": "24x26x19"
	},
	{
		"values": "26x18x1"
	},
	{
		"values": "18x29x24"
	},
	{
		"values": "1x6x9"
	},
	{
		"values": "20x27x2"
	},
	{
		"values": "3x22x21"
	},
	{
		"values": "4x16x8"
	},
	{
		"values": "29x18x16"
	},
	{
		"values": "7x16x23"
	},
	{
		"values": "13x8x14"
	},
	{
		"values": "19x25x10"
	},
	{
		"values": "23x29x6"
	},
	{
		"values": "23x21x1"
	},
	{
		"values": "22x26x10"
	},
	{
		"values": "14x4x2"
	},
	{
		"values": "18x29x17"
	},
	{
		"values": "9x4x18"
	},
	{
		"values": "7x22x9"
	},
	{
		"values": "19x5x26"
	},
	{
		"values": "27x29x19"
	},
	{
		"values": "7x13x14"
	},
	{
		"values": "19x10x1"
	},
	{
		"values": "6x22x3"
	},
	{
		"values": "12x21x5"
	},
	{
		"values": "24x20x12"
	},
	{
		"values": "28x2x11"
	},
	{
		"values": "16x18x23"
	},
	{
		"values": "2x13x25"
	},
	{
		"values": "11x7x17"
	},
	{
		"values": "27x21x4"
	},
	{
		"values": "2x10x25"
	},
	{
		"values": "22x16x17"
	},
	{
		"values": "23x22x15"
	},
	{
		"values": "17x13x13"
	},
	{
		"values": "23x24x26"
	},
	{
		"values": "27x18x24"
	},
	{
		"values": "24x7x28"
	},
	{
		"values": "30x12x15"
	},
	{
		"values": "14x28x19"
	},
	{
		"values": "2x15x29"
	},
	{
		"values": "12x13x5"
	},
	{
		"values": "17x22x21"
	},
	{
		"values": "27x10x27"
	},
	{
		"values": "17x6x25"
	},
	{
		"values": "22x2x1"
	},
	{
		"values": "1x10x9"
	},
	{
		"values": "9x7x2"
	},
	{
		"values": "30x28x3"
	},
	{
		"values": "28x11x10"
	},
	{
		"values": "8x23x15"
	},
	{
		"values": "23x4x20"
	},
	{
		"values": "12x5x4"
	},
	{
		"values": "13x17x14"
	},
	{
		"values": "28x11x2"
	},
	{
		"values": "21x11x29"
	},
	{
		"values": "10x23x22"
	},
	{
		"values": "27x23x14"
	},
	{
		"values": "7x15x23"
	},
	{
		"values": "20x2x13"
	},
	{
		"values": "8x21x4"
	},
	{
		"values": "10x20x11"
	},
	{
		"values": "23x28x11"
	},
	{
		"values": "21x22x25"
	},
	{
		"values": "23x11x17"
	},
	{
		"values": "2x29x10"
	},
	{
		"values": "28x16x5"
	},
	{
		"values": "30x26x10"
	},
	{
		"values": "17x24x16"
	},
	{
		"values": "26x27x25"
	},
	{
		"values": "14x13x25"
	},
	{
		"values": "22x27x5"
	},
	{
		"values": "24x15x12"
	},
	{
		"values": "5x21x25"
	},
	{
		"values": "4x27x1"
	},
	{
		"values": "25x4x10"
	},
	{
		"values": "15x13x1"
	},
	{
		"values": "21x23x7"
	},
	{
		"values": "8x3x4"
	},
	{
		"values": "10x5x7"
	},
	{
		"values": "9x13x30"
	},
	{
		"values": "2x2x30"
	},
	{
		"values": "26x4x29"
	},
	{
		"values": "5x14x14"
	},
	{
		"values": "2x27x9"
	},
	{
		"values": "22x16x1"
	},
	{
		"values": "4x23x5"
	},
	{
		"values": "13x7x26"
	},
	{
		"values": "2x12x10"
	},
	{
		"values": "12x7x22"
	},
	{
		"values": "26x30x26"
	},
	{
		"values": "28x16x28"
	},
	{
		"values": "15x19x11"
	},
	{
		"values": "4x18x1"
	},
	{
		"values": "20x14x24"
	},
	{
		"values": "6x10x22"
	},
	{
		"values": "9x20x3"
	},
	{
		"values": "14x9x27"
	},
	{
		"values": "26x17x9"
	},
	{
		"values": "10x30x28"
	},
	{
		"values": "6x3x29"
	},
	{
		"values": "4x16x28"
	},
	{
		"values": "8x24x11"
	},
	{
		"values": "23x10x1"
	},
	{
		"values": "11x7x7"
	},
	{
		"values": "29x6x15"
	},
	{
		"values": "13x25x12"
	},
	{
		"values": "29x14x3"
	},
	{
		"values": "26x22x21"
	},
	{
		"values": "8x3x11"
	},
	{
		"values": "27x13x25"
	},
	{
		"values": "27x6x2"
	},
	{
		"values": "8x11x7"
	},
	{
		"values": "25x12x9"
	},
	{
		"values": "24x30x12"
	},
	{
		"values": "13x1x30"
	},
	{
		"values": "25x23x16"
	},
	{
		"values": "9x13x29"
	},
	{
		"values": "29x26x16"
	},
	{
		"values": "11x15x9"
	},
	{
		"values": "11x23x6"
	},
	{
		"values": "15x27x28"
	},
	{
		"values": "27x24x21"
	},
	{
		"values": "6x24x1"
	},
	{
		"values": "25x25x5"
	},
	{
		"values": "11x1x26"
	},
	{
		"values": "21x4x24"
	},
	{
		"values": "10x5x12"
	},
	{
		"values": "4x30x13"
	},
	{
		"values": "24x22x5"
	},
	{
		"values": "26x7x21"
	},
	{
		"values": "23x3x17"
	},
	{
		"values": "22x18x2"
	},
	{
		"values": "25x1x14"
	},
	{
		"values": "23x25x30"
	},
	{
		"values": "8x7x7"
	},
	{
		"values": "30x19x8"
	},
	{
		"values": "17x6x15"
	},
	{
		"values": "2x11x20"
	},
	{
		"values": "8x3x22"
	},
	{
		"values": "23x14x26"
	},
	{
		"values": "8x22x25"
	},
	{
		"values": "27x1x2"
	},
	{
		"values": "10x26x2"
	},
	{
		"values": "28x30x7"
	},
	{
		"values": "5x30x7"
	},
	{
		"values": "27x16x30"
	},
	{
		"values": "28x29x1"
	},
	{
		"values": "8x25x18"
	},
	{
		"values": "20x12x29"
	},
	{
		"values": "9x19x9"
	},
	{
		"values": "7x25x15"
	},
	{
		"values": "25x18x18"
	},
	{
		"values": "11x8x2"
	},
	{
		"values": "4x20x6"
	},
	{
		"values": "18x5x20"
	},
	{
		"values": "2x3x29"
	},
	{
		"values": "25x26x22"
	},
	{
		"values": "18x25x26"
	},
	{
		"values": "9x12x16"
	},
	{
		"values": "18x7x27"
	},
	{
		"values": "17x20x9"
	},
	{
		"values": "6x29x26"
	},
	{
		"values": "17x7x19"
	},
	{
		"values": "21x7x5"
	},
	{
		"values": "29x15x12"
	},
	{
		"values": "22x4x1"
	},
	{
		"values": "11x12x11"
	},
	{
		"values": "26x30x4"
	},
	{
		"values": "12x24x13"
	},
	{
		"values": "13x8x3"
	},
	{
		"values": "26x25x3"
	},
	{
		"values": "21x26x10"
	},
	{
		"values": "14x9x26"
	},
	{
		"values": "20x1x7"
	},
	{
		"values": "11x12x3"
	},
	{
		"values": "12x11x4"
	},
	{
		"values": "11x15x30"
	},
	{
		"values": "17x6x25"
	},
	{
		"values": "20x22x3"
	},
	{
		"values": "1x16x17"
	},
	{
		"values": "11x5x20"
	},
	{
		"values": "12x12x7"
	},
	{
		"values": "2x14x10"
	},
	{
		"values": "14x27x3"
	},
	{
		"values": "14x16x18"
	},
	{
		"values": "21x28x24"
	},
	{
		"values": "14x20x1"
	},
	{
		"values": "29x14x1"
	},
	{
		"values": "10x10x9"
	},
	{
		"values": "25x23x4"
	},
	{
		"values": "17x15x14"
	},
	{
		"values": "9x20x26"
	},
	{
		"values": "16x2x17"
	},
	{
		"values": "13x28x25"
	},
	{
		"values": "16x1x11"
	},
	{
		"values": "19x16x8"
	},
	{
		"values": "20x21x2"
	},
	{
		"values": "27x9x22"
	},
	{
		"values": "24x18x3"
	},
	{
		"values": "23x30x6"
	},
	{
		"values": "4x18x3"
	},
	{
		"values": "30x15x8"
	},
	{
		"values": "27x20x19"
	},
	{
		"values": "28x29x26"
	},
	{
		"values": "2x21x18"
	},
	{
		"values": "1x23x30"
	},
	{
		"values": "1x9x12"
	},
	{
		"values": "4x11x30"
	},
	{
		"values": "1x28x4"
	},
	{
		"values": "17x10x10"
	},
	{
		"values": "12x14x6"
	},
	{
		"values": "8x9x24"
	},
	{
		"values": "8x3x3"
	},
	{
		"values": "29x8x20"
	},
	{
		"values": "26x29x2"
	},
	{
		"values": "29x25x25"
	},
	{
		"values": "11x17x23"
	},
	{
		"values": "6x30x21"
	},
	{
		"values": "13x18x29"
	},
	{
		"values": "2x10x8"
	},
	{
		"values": "29x29x27"
	},
	{
		"values": "27x15x15"
	},
	{
		"values": "16x17x30"
	},
	{
		"values": "3x3x22"
	},
	{
		"values": "21x12x6"
	},
	{
		"values": "22x1x5"
	},
	{
		"values": "30x8x20"
	},
	{
		"values": "6x28x13"
	},
	{
		"values": "11x2x23"
	},
	{
		"values": "14x18x27"
	},
	{
		"values": "6x26x13"
	},
	{
		"values": "10x24x24"
	},
	{
		"values": "4x24x6"
	},
	{
		"values": "20x8x3"
	},
	{
		"values": "23x11x5"
	},
	{
		"values": "29x5x24"
	},
	{
		"values": "14x15x22"
	},
	{
		"values": "21x17x13"
	},
	{
		"values": "10x10x8"
	},
	{
		"values": "1x11x23"
	},
	{
		"values": "21x19x24"
	},
	{
		"values": "19x9x13"
	},
	{
		"values": "21x26x28"
	},
	{
		"values": "25x11x28"
	},
	{
		"values": "2x17x1"
	},
	{
		"values": "18x9x8"
	},
	{
		"values": "5x21x6"
	},
	{
		"values": "12x5x2"
	},
	{
		"values": "23x8x15"
	},
	{
		"values": "30x16x24"
	},
	{
		"values": "7x9x27"
	},
	{
		"values": "16x30x7"
	},
	{
		"values": "2x21x28"
	},
	{
		"values": "5x10x6"
	},
	{
		"values": "8x7x1"
	},
	{
		"values": "28x13x5"
	},
	{
		"values": "11x5x14"
	},
	{
		"values": "26x22x29"
	},
	{
		"values": "23x15x13"
	},
	{
		"values": "14x2x16"
	},
	{
		"values": "22x21x9"
	},
	{
		"values": "4x20x3"
	},
	{
		"values": "18x17x19"
	},
	{
		"values": "12x7x9"
	},
	{
		"values": "6x12x25"
	},
	{
		"values": "3x30x27"
	},
	{
		"values": "8x19x22"
	},
	{
		"values": "1x9x27"
	},
	{
		"values": "23x20x12"
	},
	{
		"values": "14x7x29"
	},
	{
		"values": "9x12x12"
	},
	{
		"values": "30x2x6"
	},
	{
		"values": "15x7x16"
	},
	{
		"values": "19x13x18"
	},
	{
		"values": "11x8x13"
	},
	{
		"values": "16x5x3"
	},
	{
		"values": "19x26x24"
	},
	{
		"values": "26x8x21"
	},
	{
		"values": "21x20x7"
	},
	{
		"values": "15x1x25"
	},
	{
		"values": "29x15x21"
	},
	{
		"values": "22x17x7"
	},
	{
		"values": "16x17x10"
	},
	{
		"values": "6x12x24"
	},
	{
		"values": "8x13x27"
	},
	{
		"values": "30x25x14"
	},
	{
		"values": "25x7x10"
	},
	{
		"values": "15x2x2"
	},
	{
		"values": "18x15x19"
	},
	{
		"values": "18x13x24"
	},
	{
		"values": "19x30x1"
	},
	{
		"values": "17x1x3"
	},
	{
		"values": "26x21x15"
	},
	{
		"values": "10x10x18"
	},
	{
		"values": "9x16x6"
	},
	{
		"values": "29x7x30"
	},
	{
		"values": "11x10x30"
	},
	{
		"values": "6x11x2"
	},
	{
		"values": "7x29x23"
	},
	{
		"values": "13x2x30"
	},
	{
		"values": "25x27x13"
	},
	{
		"values": "5x15x21"
	},
	{
		"values": "4x8x30"
	},
	{
		"values": "15x27x11"
	},
	{
		"values": "27x1x6"
	},
	{
		"values": "2x24x11"
	},
	{
		"values": "16x20x19"
	},
	{
		"values": "25x28x20"
	},
	{
		"values": "6x8x4"
	},
	{
		"values": "27x16x11"
	},
	{
		"values": "1x5x27"
	},
	{
		"values": "12x19x26"
	},
	{
		"values": "18x24x14"
	},
	{
		"values": "4x25x17"
	},
	{
		"values": "24x24x26"
	},
	{
		"values": "28x3x18"
	},
	{
		"values": "8x20x28"
	},
	{
		"values": "22x7x21"
	},
	{
		"values": "24x5x28"
	},
	{
		"values": "23x30x29"
	},
	{
		"values": "25x16x27"
	},
	{
		"values": "28x10x30"
	},
	{
		"values": "9x2x4"
	},
	{
		"values": "30x2x23"
	},
	{
		"values": "21x9x23"
	},
	{
		"values": "27x4x26"
	},
	{
		"values": "2x23x16"
	},
	{
		"values": "24x26x30"
	},
	{
		"values": "26x1x30"
	},
	{
		"values": "10x4x28"
	},
	{
		"values": "11x29x12"
	},
	{
		"values": "28x13x30"
	},
	{
		"values": "24x10x28"
	},
	{
		"values": "8x12x12"
	},
	{
		"values": "19x27x11"
	},
	{
		"values": "11x28x7"
	},
	{
		"values": "14x6x3"
	},
	{
		"values": "6x27x5"
	},
	{
		"values": "6x17x14"
	},
	{
		"values": "24x24x17"
	},
	{
		"values": "18x23x14"
	},
	{
		"values": "17x5x7"
	},
	{
		"values": "11x4x23"
	},
	{
		"values": "5x1x17"
	},
	{
		"values": "26x15x24"
	},
	{
		"values": "3x9x24"
	},
	{
		"values": "5x3x15"
	},
	{
		"values": "5x20x19"
	},
	{
		"values": "5x21x2"
	},
	{
		"values": "13x5x30"
	},
	{
		"values": "19x6x24"
	},
	{
		"values": "19x17x6"
	},
	{
		"values": "23x7x13"
	},
	{
		"values": "28x23x13"
	},
	{
		"values": "9x1x6"
	},
	{
		"values": "15x12x16"
	},
	{
		"values": "21x19x9"
	},
	{
		"values": "25x5x5"
	},
	{
		"values": "9x7x9"
	},
	{
		"values": "6x5x8"
	},
	{
		"values": "3x11x18"
	},
	{
		"values": "23x25x11"
	},
	{
		"values": "25x4x6"
	},
	{
		"values": "4x27x1"
	},
	{
		"values": "4x3x3"
	},
	{
		"values": "30x11x5"
	},
	{
		"values": "9x17x12"
	},
	{
		"values": "15x6x24"
	},
	{
		"values": "10x22x15"
	},
	{
		"values": "29x27x9"
	},
	{
		"values": "20x21x11"
	},
	{
		"values": "18x10x5"
	},
	{
		"values": "11x2x2"
	},
	{
		"values": "9x8x8"
	},
	{
		"values": "1x26x21"
	},
	{
		"values": "11x11x16"
	},
	{
		"values": "2x18x30"
	},
	{
		"values": "29x27x24"
	},
	{
		"values": "27x8x18"
	},
	{
		"values": "19x3x17"
	},
	{
		"values": "30x21x26"
	},
	{
		"values": "25x13x25"
	},
	{
		"values": "20x22x1"
	},
	{
		"values": "10x1x12"
	},
	{
		"values": "11x17x15"
	},
	{
		"values": "29x11x30"
	},
	{
		"values": "17x30x27"
	},
	{
		"values": "21x22x17"
	},
	{
		"values": "13x6x22"
	},
	{
		"values": "22x16x12"
	},
	{
		"values": "27x18x19"
	},
	{
		"values": "4x13x6"
	},
	{
		"values": "27x29x10"
	},
	{
		"values": "3x23x10"
	},
	{
		"values": "26x16x24"
	},
	{
		"values": "18x26x20"
	},
	{
		"values": "11x28x16"
	},
	{
		"values": "21x6x15"
	},
	{
		"values": "9x26x17"
	},
	{
		"values": "8x15x8"
	},
	{
		"values": "3x7x10"
	},
	{
		"values": "2x28x8"
	},
	{
		"values": "1x2x24"
	},
	{
		"values": "7x8x9"
	},
	{
		"values": "19x4x22"
	},
	{
		"values": "11x20x9"
	},
	{
		"values": "12x22x16"
	},
	{
		"values": "26x8x19"
	},
	{
		"values": "13x28x24"
	},
	{
		"values": "4x10x16"
	},
	{
		"values": "12x8x10"
	},
	{
		"values": "14x24x24"
	},
	{
		"values": "19x19x28"
	},
	{
		"values": "29x1x15"
	},
	{
		"values": "10x5x14"
	},
	{
		"values": "20x19x23"
	},
	{
		"values": "10x7x12"
	},
	{
		"values": "1x7x13"
	},
	{
		"values": "5x12x13"
	},
	{
		"values": "25x21x8"
	},
	{
		"values": "22x28x8"
	},
	{
		"values": "7x9x4"
	},
	{
		"values": "3x20x15"
	},
	{
		"values": "15x27x19"
	},
	{
		"values": "18x24x12"
	},
	{
		"values": "16x10x16"
	},
	{
		"values": "22x19x8"
	},
	{
		"values": "15x4x3"
	},
	{
		"values": "9x30x25"
	},
	{
		"values": "1x1x6"
	},
	{
		"values": "24x4x25"
	},
	{
		"values": "13x18x29"
	},
	{
		"values": "10x2x8"
	},
	{
		"values": "21x1x17"
	},
	{
		"values": "29x14x22"
	},
	{
		"values": "17x29x11"
	},
	{
		"values": "10x27x16"
	},
	{
		"values": "25x16x15"
	},
	{
		"values": "14x2x17"
	},
	{
		"values": "12x27x3"
	},
	{
		"values": "14x17x25"
	},
	{
		"values": "24x4x1"
	},
	{
		"values": "18x28x18"
	},
	{
		"values": "9x14x26"
	},
	{
		"values": "28x24x17"
	},
	{
		"values": "1x26x12"
	},
	{
		"values": "2x18x20"
	},
	{
		"values": "12x19x22"
	},
	{
		"values": "19x25x20"
	},
	{
		"values": "5x17x27"
	},
	{
		"values": "17x29x16"
	},
	{
		"values": "29x19x11"
	},
	{
		"values": "16x2x4"
	},
	{
		"values": "23x24x1"
	},
	{
		"values": "19x18x3"
	},
	{
		"values": "28x14x6"
	},
	{
		"values": "18x5x23"
	},
	{
		"values": "9x24x12"
	},
	{
		"values": "15x4x6"
	},
	{
		"values": "15x7x24"
	},
	{
		"values": "22x15x8"
	},
	{
		"values": "22x1x22"
	},
	{
		"values": "6x4x22"
	},
	{
		"values": "26x1x30"
	},
	{
		"values": "8x21x27"
	},
	{
		"values": "7x1x11"
	},
	{
		"values": "9x8x18"
	},
	{
		"values": "20x27x12"
	},
	{
		"values": "26x23x20"
	},
	{
		"values": "26x22x30"
	},
	{
		"values": "24x3x16"
	},
	{
		"values": "8x24x28"
	},
	{
		"values": "13x28x5"
	},
	{
		"values": "4x29x23"
	},
	{
		"values": "22x5x8"
	},
	{
		"values": "20x22x3"
	},
	{
		"values": "9x9x17"
	},
	{
		"values": "28x3x30"
	},
	{
		"values": "10x13x10"
	},
	{
		"values": "10x25x13"
	},
	{
		"values": "9x20x3"
	},
	{
		"values": "1x21x25"
	},
	{
		"values": "24x21x15"
	},
	{
		"values": "21x5x14"
	},
	{
		"values": "13x8x20"
	},
	{
		"values": "29x17x3"
	},
	{
		"values": "5x17x28"
	},
	{
		"values": "16x12x7"
	},
	{
		"values": "23x1x24"
	},
	{
		"values": "4x24x29"
	},
	{
		"values": "23x25x14"
	},
	{
		"values": "8x27x2"
	},
	{
		"values": "23x11x13"
	},
	{
		"values": "13x4x5"
	},
	{
		"values": "24x1x26"
	},
	{
		"values": "21x1x23"
	},
	{
		"values": "10x12x12"
	},
	{
		"values": "21x29x25"
	},
	{
		"values": "27x25x30"
	},
	{
		"values": "24x23x4"
	},
	{
		"values": "1x30x23"
	},
	{
		"values": "29x28x14"
	},
	{
		"values": "4x11x30"
	},
	{
		"values": "9x25x10"
	},
	{
		"values": "17x11x6"
	},
	{
		"values": "14x29x30"
	},
	{
		"values": "23x5x5"
	},
	{
		"values": "25x18x21"
	},
	{
		"values": "8x7x1"
	},
	{
		"values": "27x11x3"
	},
	{
		"values": "5x10x8"
	},
	{
		"values": "11x1x11"
	},
	{
		"values": "16x17x26"
	},
	{
		"values": "15x22x19"
	},
	{
		"values": "16x9x6"
	},
	{
		"values": "18x13x27"
	},
	{
		"values": "26x4x22"
	},
	{
		"values": "1x20x21"
	},
	{
		"values": "6x14x29"
	},
	{
		"values": "11x7x6"
	},
	{
		"values": "1x23x7"
	},
	{
		"values": "12x19x13"
	},
	{
		"values": "18x21x25"
	},
	{
		"values": "15x17x20"
	},
	{
		"values": "23x8x9"
	},
	{
		"values": "15x9x26"
	},
	{
		"values": "9x12x9"
	},
	{
		"values": "12x13x14"
	},
	{
		"values": "27x26x7"
	},
	{
		"values": "11x19x22"
	},
	{
		"values": "16x12x21"
	},
	{
		"values": "10x30x28"
	},
	{
		"values": "21x2x7"
	},
	{
		"values": "12x9x18"
	},
	{
		"values": "7x17x14"
	},
	{
		"values": "13x17x17"
	},
	{
		"values": "3x21x10"
	},
	{
		"values": "30x9x15"
	},
	{
		"values": "2x8x15"
	},
	{
		"values": "15x12x10"
	},
	{
		"values": "23x26x9"
	},
	{
		"values": "29x30x10"
	},
	{
		"values": "30x22x17"
	},
	{
		"values": "17x26x30"
	},
	{
		"values": "27x26x20"
	},
	{
		"values": "17x28x17"
	},
	{
		"values": "30x12x16"
	},
	{
		"values": "7x23x15"
	},
	{
		"values": "30x15x19"
	},
	{
		"values": "13x19x10"
	},
	{
		"values": "22x10x4"
	},
	{
		"values": "17x23x10"
	},
	{
		"values": "2x28x18"
	},
	{
		"values": "27x21x28"
	},
	{
		"values": "24x26x5"
	},
	{
		"values": "6x23x25"
	},
	{
		"values": "17x4x16"
	},
	{
		"values": "14x1x13"
	},
	{
		"values": "23x21x11"
	},
	{
		"values": "14x15x30"
	},
	{
		"values": "26x13x10"
	},
	{
		"values": "30x19x25"
	},
	{
		"values": "26x6x26"
	},
	{
		"values": "9x16x29"
	},
	{
		"values": "15x2x24"
	},
	{
		"values": "13x3x20"
	},
	{
		"values": "23x12x30"
	},
	{
		"values": "22x23x23"
	},
	{
		"values": "8x21x2"
	},
	{
		"values": "18x28x5"
	},
	{
		"values": "21x27x14"
	},
	{
		"values": "29x28x23"
	},
	{
		"values": "12x30x28"
	},
	{
		"values": "17x16x3"
	},
	{
		"values": "5x19x11"
	},
	{
		"values": "28x22x22"
	},
	{
		"values": "1x4x28"
	},
	{
		"values": "10x10x14"
	},
	{
		"values": "18x15x7"
	},
	{
		"values": "18x11x1"
	},
	{
		"values": "12x7x16"
	},
	{
		"values": "10x22x24"
	},
	{
		"values": "27x25x6"
	},
	{
		"values": "19x29x25"
	},
	{
		"values": "10x1x26"
	},
	{
		"values": "26x27x30"
	},
	{
		"values": "4x23x19"
	},
	{
		"values": "24x19x4"
	},
	{
		"values": "21x11x14"
	},
	{
		"values": "4x13x27"
	},
	{
		"values": "9x1x11"
	},
	{
		"values": "16x20x8"
	},
	{
		"values": "4x3x11"
	},
	{
		"values": "1x16x12"
	},
	{
		"values": "14x6x30"
	},
	{
		"values": "8x1x10"
	},
	{
		"values": "11x18x7"
	},
	{
		"values": "29x28x30"
	},
	{
		"values": "4x21x8"
	},
	{
		"values": "3x21x4"
	},
	{
		"values": "6x1x5"
	},
	{
		"values": "26x18x3"
	},
	{
		"values": "28x27x27"
	},
	{
		"values": "17x3x12"
	},
	{
		"values": "6x1x22"
	},
	{
		"values": "23x12x28"
	},
	{
		"values": "12x13x2"
	},
	{
		"values": "11x2x13"
	},
	{
		"values": "7x1x28"
	},
	{
		"values": "27x6x25"
	},
	{
		"values": "14x14x3"
	},
	{
		"values": "14x11x20"
	},
	{
		"values": "2x27x7"
	},
	{
		"values": "22x24x23"
	},
	{
		"values": "7x15x20"
	},
	{
		"values": "30x6x17"
	},
	{
		"values": "20x23x25"
	},
	{
		"values": "18x16x27"
	},
	{
		"values": "2x9x6"
	},
	{
		"values": "9x18x19"
	},
	{
		"values": "20x11x22"
	},
	{
		"values": "11x16x19"
	},
	{
		"values": "14x29x23"
	},
	{
		"values": "14x9x20"
	},
	{
		"values": "8x10x12"
	},
	{
		"values": "18x17x6"
	},
	{
		"values": "28x7x16"
	},
	{
		"values": "12x19x28"
	},
	{
		"values": "5x3x16"
	},
	{
		"values": "1x25x10"
	},
	{
		"values": "4x14x10"
	},
	{
		"values": "9x6x3"
	},
	{
		"values": "15x27x28"
	},
	{
		"values": "13x26x14"
	},
	{
		"values": "21x8x25"
	},
	{
		"values": "29x10x20"
	},
	{
		"values": "14x26x30"
	},
	{
		"values": "25x13x28"
	},
	{
		"values": "1x15x23"
	},
	{
		"values": "6x20x21"
	},
	{
		"values": "18x2x1"
	},
	{
		"values": "22x25x16"
	},
	{
		"values": "23x25x17"
	},
	{
		"values": "2x14x21"
	},
	{
		"values": "14x25x16"
	},
	{
		"values": "12x17x6"
	},
	{
		"values": "19x29x15"
	},
	{
		"values": "25x9x6"
	},
	{
		"values": "19x17x13"
	},
	{
		"values": "24x22x5"
	},
	{
		"values": "19x4x13"
	},
	{
		"values": "10x18x6"
	},
	{
		"values": "6x25x6"
	},
	{
		"values": "23x24x20"
	},
	{
		"values": "8x22x13"
	},
	{
		"values": "25x10x29"
	},
	{
		"values": "5x12x25"
	},
	{
		"values": "20x5x11"
	},
	{
		"values": "7x16x29"
	},
	{
		"values": "29x24x22"
	},
	{
		"values": "28x20x1"
	},
	{
		"values": "10x27x10"
	},
	{
		"values": "6x9x27"
	},
	{
		"values": "26x15x30"
	},
	{
		"values": "26x3x19"
	},
	{
		"values": "20x11x3"
	},
	{
		"values": "26x1x29"
	},
	{
		"values": "6x23x4"
	},
	{
		"values": "6x13x21"
	},
	{
		"values": "9x23x25"
	},
	{
		"values": "15x1x10"
	},
	{
		"values": "29x12x13"
	},
	{
		"values": "7x8x24"
	},
	{
		"values": "29x30x27"
	},
	{
		"values": "3x29x19"
	},
	{
		"values": "14x16x17"
	},
	{
		"values": "4x8x27"
	},
	{
		"values": "26x17x8"
	},
	{
		"values": "10x27x17"
	},
	{
		"values": "11x28x17"
	},
	{
		"values": "17x16x27"
	},
	{
		"values": "1x8x22"
	},
	{
		"values": "6x30x16"
	},
	{
		"values": "7x30x22"
	},
	{
		"values": "20x12x3"
	},
	{
		"values": "18x10x2"
	},
	{
		"values": "20x21x26"
	},
	{
		"values": "11x1x17"
	},
	{
		"values": "9x15x15"
	},
	{
		"values": "19x14x30"
	},
	{
		"values": "24x22x20"
	},
	{
		"values": "11x26x23"
	},
	{
		"values": "14x3x23"
	},
	{
		"values": "1x28x29"
	},
	{
		"values": "29x20x4"
	},
	{
		"values": "1x4x20"
	},
	{
		"values": "12x26x8"
	},
	{
		"values": "14x11x14"
	},
	{
		"values": "14x19x13"
	},
	{
		"values": "15x13x24"
	},
	{
		"values": "16x7x26"
	},
	{
		"values": "11x20x11"
	},
	{
		"values": "5x24x26"
	},
	{
		"values": "24x25x7"
	},
	{
		"values": "21x3x14"
	},
	{
		"values": "24x29x20"
	},
	{
		"values": "7x12x1"
	},
	{
		"values": "16x17x4"
	},
	{
		"values": "29x16x21"
	},
	{
		"values": "28x8x17"
	},
	{
		"values": "11x30x25"
	},
	{
		"values": "1x26x23"
	},
	{
		"values": "25x19x28"
	},
	{
		"values": "30x24x5"
	},
	{
		"values": "26x29x15"
	},
	{
		"values": "4x25x23"
	},
	{
		"values": "14x25x19"
	},
	{
		"values": "29x10x7"
	},
	{
		"values": "29x29x28"
	},
	{
		"values": "19x13x24"
	},
	{
		"values": "21x28x5"
	},
	{
		"values": "8x15x24"
	},
	{
		"values": "1x10x12"
	},
	{
		"values": "2x26x6"
	},
	{
		"values": "14x14x4"
	},
	{
		"values": "10x16x27"
	},
	{
		"values": "9x17x25"
	},
	{
		"values": "25x8x7"
	},
	{
		"values": "1x9x28"
	},
	{
		"values": "10x8x17"
	},
	{
		"values": "4x12x1"
	},
	{
		"values": "17x26x29"
	},
	{
		"values": "23x12x26"
	},
	{
		"values": "2x21x22"
	},
	{
		"values": "18x23x13"
	},
	{
		"values": "1x14x5"
	},
	{
		"values": "25x27x26"
	},
	{
		"values": "4x30x30"
	},
	{
		"values": "5x13x2"
	},
	{
		"values": "17x9x6"
	},
	{
		"values": "28x18x28"
	},
	{
		"values": "7x30x2"
	},
	{
		"values": "28x22x17"
	},
	{
		"values": "14x15x14"
	},
	{
		"values": "10x14x19"
	},
	{
		"values": "6x15x22"
	},
	{
		"values": "27x4x17"
	},
	{
		"values": "28x21x6"
	},
	{
		"values": "19x29x26"
	},
	{
		"values": "6x17x17"
	},
	{
		"values": "20x13x16"
	},
	{
		"values": "25x4x1"
	},
	{
		"values": "2x9x5"
	},
	{
		"values": "30x3x1"
	},
	{
		"values": "24x21x2"
	},
	{
		"values": "14x19x12"
	},
	{
		"values": "22x5x23"
	},
	{
		"values": "14x4x21"
	},
	{
		"values": "10x2x17"
	},
	{
		"values": "3x14x10"
	},
	{
		"values": "17x5x3"
	},
	{
		"values": "22x17x13"
	},
	{
		"values": "5x19x3"
	},
	{
		"values": "29x22x6"
	},
	{
		"values": "12x28x3"
	},
	{
		"values": "9x21x25"
	},
	{
		"values": "10x2x14"
	},
	{
		"values": "13x26x7"
	},
	{
		"values": "18x23x2"
	},
	{
		"values": "9x14x17"
	},
	{
		"values": "21x3x13"
	},
	{
		"values": "13x23x9"
	},
	{
		"values": "1x20x4"
	},
	{
		"values": "11x4x1"
	},
	{
		"values": "19x5x30"
	},
	{
		"values": "9x9x29"
	},
	{
		"values": "26x29x14"
	},
	{
		"values": "1x4x10"
	},
	{
		"values": "7x27x30"
	},
	{
		"values": "8x3x23"
	},
	{
		"values": "1x27x27"
	},
	{
		"values": "7x27x27"
	},
	{
		"values": "1x26x16"
	},
	{
		"values": "29x16x14"
	},
	{
		"values": "18x6x12"
	},
	{
		"values": "24x24x24"
	},
	{
		"values": "26x2x19"
	},
	{
		"values": "15x17x4"
	},
	{
		"values": "11x7x14"
	},
	{
		"values": "14x19x10"
	},
	{
		"values": "9x10x1"
	},
	{
		"values": "14x17x9"
	},
	{
		"values": "20x19x13"
	},
	{
		"values": "25x20x8"
	},
	{
		"values": "24x20x21"
	},
	{
		"values": "26x30x2"
	},
	{
		"values": "24x2x10"
	},
	{
		"values": "28x4x13"
	},
	{
		"values": "27x17x11"
	},
	{
		"values": "15x3x8"
	},
	{
		"values": "11x29x10"
	},
	{
		"values": "26x15x16"
	},
	{
		"values": "4x28x22"
	},
	{
		"values": "7x5x22"
	},
	{
		"values": "10x28x9"
	},
	{
		"values": "6x28x13"
	},
	{
		"values": "10x5x6"
	},
	{
		"values": "20x12x6"
	},
	{
		"values": "25x30x30"
	},
	{
		"values": "17x16x14"
	},
	{
		"values": "14x20x3"
	},
	{
		"values": "16x10x8"
	},
	{
		"values": "9x28x14"
	},
	{
		"values": "16x12x12"
	},
	{
		"values": "11x13x25"
	},
	{
		"values": "21x16x28"
	},
	{
		"values": "10x3x18"
	},
	{
		"values": "5x9x20"
	},
	{
		"values": "17x23x5"
	},
	{
		"values": "3x13x16"
	},
	{
		"values": "29x30x17"
	},
	{
		"values": "2x2x8"
	},
	{
		"values": "15x8x30"
	},
	{
		"values": "20x1x16"
	},
	{
		"values": "23x10x29"
	},
	{
		"values": "4x5x4"
	},
	{
		"values": "6x18x12"
	},
	{
		"values": "26x10x22"
	},
	{
		"values": "21x10x17"
	},
	{
		"values": "26x12x29"
	},
	{
		"values": "7x20x21"
	},
	{
		"values": "18x9x15"
	},
	{
		"values": "10x23x20"
	},
	{
		"values": "20x1x27"
	},
	{
		"values": "10x10x3"
	},
	{
		"values": "25x12x23"
	},
	{
		"values": "30x11x15"
	},
	{
		"values": "16x22x3"
	},
	{
		"values": "22x10x11"
	},
	{
		"values": "15x10x20"
	},
	{
		"values": "2x20x17"
	},
	{
		"values": "20x20x1"
	},
	{
		"values": "24x16x4"
	},
	{
		"values": "23x27x7"
	},
	{
		"values": "7x27x22"
	},
	{
		"values": "24x16x8"
	},
	{
		"values": "20x11x25"
	},
	{
		"values": "30x28x11"
	},
	{
		"values": "21x6x24"
	},
	{
		"values": "15x2x9"
	},
	{
		"values": "16x30x24"
	},
	{
		"values": "21x27x9"
	},
	{
		"values": "7x19x8"
	},
	{
		"values": "24x13x28"
	},
	{
		"values": "12x26x28"
	},
	{
		"values": "16x21x11"
	},
	{
		"values": "25x5x13"
	},
	{
		"values": "23x3x17"
	},
	{
		"values": "23x1x17"
	},
	{
		"values": "4x17x18"
	},
	{
		"values": "17x13x18"
	},
	{
		"values": "25x12x19"
	},
	{
		"values": "17x4x19"
	},
	{
		"values": "4x21x26"
	},
	{
		"values": "6x28x1"
	},
	{
		"values": "23x22x15"
	},
	{
		"values": "6x23x12"
	},
	{
		"values": "21x17x9"
	},
	{
		"values": "30x4x23"
	},
	{
		"values": "2x19x21"
	},
	{
		"values": "28x24x7"
	},
	{
		"values": "19x24x14"
	},
	{
		"values": "13x20x26"
	},
	{
		"values": "19x24x29"
	},
	{
		"values": "8x26x3"
	},
	{
		"values": "16x12x14"
	},
	{
		"values": "17x4x21"
	},
	{
		"values": "8x4x20"
	},
	{
		"values": "13x27x17"
	},
	{
		"values": "9x21x1"
	},
	{
		"values": "29x25x6"
	},
	{
		"values": "7x9x26"
	},
	{
		"values": "13x25x5"
	},
	{
		"values": "6x9x21"
	},
	{
		"values": "12x10x11"
	},
	{
		"values": "30x28x21"
	},
	{
		"values": "15x6x2"
	},
	{
		"values": "8x18x19"
	},
	{
		"values": "26x20x24"
	},
	{
		"values": "26x17x14"
	},
	{
		"values": "27x8x1"
	},
	{
		"values": "19x19x18"
	},
	{
		"values": "25x24x27"
	},
	{
		"values": "14x29x15"
	},
	{
		"values": "22x26x1"
	},
	{
		"values": "14x17x9"
	},
	{
		"values": "2x6x23"
	},
	{
		"values": "29x7x5"
	},
	{
		"values": "14x16x19"
	},
	{
		"values": "14x21x18"
	},
	{
		"values": "10x15x23"
	},
	{
		"values": "21x29x14"
	},
	{
		"values": "20x29x30"
	},
	{
		"values": "23x11x5"
	}
];

function getSqFeet(input){

	var results = [];

	var mapped = input.map(function(el){
		return el.values;
	});

	mapped.forEach(function(str){

		var arr = str.split('x');

		var side1 =	arr[0] * arr[1];
		var side2 =	arr[0] * arr[2];
		var side3 =	arr[1] * arr[2];

		var sides = [];

		sides.push(side1,side2,side3);
		
		var min = sides.reduce(function(a, b) {
			return Math.min(a,b);
		});

		var surfaceArrea = (side1 + side2 + side3) * 2;
		var shortestSide = min;
	    var result = surfaceArrea + shortestSide

		results.push(result);		
	});

	var sum = results.reduce(function add(a, b) {
	    return a + b;
	});

	return sum;
}

getSqFeet(input);


		

