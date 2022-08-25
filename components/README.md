# COMPONENTS

## Button

```bash
<Button
  class=""
  isColorGray
  isColorBlue
  isColorBlueLight
  isColorBlueLightest
  isColorGreen
  isColorGreenLight
  isColorOrange
  isColorOrangeLight
  isColorRed
  isColorRedLightest
  isTextGray
  isSmall
  isMedium
  isDisabled
  isFluid
  isShowIconFront
  isShowIconBack
  :iconFrontSrc="'/images/icons/ic-xxxxx.svg'"
  :iconFrontTop="10"
  :iconFrontLeft="10"
  :iconFrontWidth="10"
  :iconFrontHeight="10"
  :iconFrontAlt="'Icon'"
  :iconBackSrc="'/images/icons/ic-xxxxx.svg'"
  :iconBackTop="10"
  :iconBackLeft="10"
  :iconBackWidth="10"
  :iconBackHeight="10"
  :iconBackAlt="'Icon'"
  :width="150"
  :textTop="0"
  :onClick="function () {}"
>
  ...
</Button>
```

## Checkbox

```bash
<Checkbox
  isDisabled
  :label="'Disabled'"
  :name="'disabled'"
  :value="false"
/>
```

## Sidebar

```bash
<Sidebar
  class=""
  :isExpand="false"
  :isMenuDashboard="true"
  :isMenuPolicyInquiry="false"
  :isMenuOpd="false"
  :isMenuAdmissionPreArrangement="false"
  :isMenuDischarge="false"
  :isMenuReimbursement="false"
  :isMenuBatchClaim="false"
  :isMenuSettings="false"
  :srcImageUser="'/images/contents/user-1.png'"
  :onClickDashboard="() => {}"
  :onClickPolicyInquiry="() => {}"
  :onClickOpd="() => {}"
  :onClickAdmissionPreArrangement="() => {}"
  :onClickDischarge="() => {}"
  :onClickReimbursement="() => {}"
  :onClickBatchClaim="() => {}"
  :onClickSettings="() => {}"
  :onClickLogout="() => {}"
  :onClickToggleExpand="() => {}"
/>
```

## Container

```bash
<Container
  class=""
  isMainContent
>
  ...
</Container>
```

## DateTimePicker

```bash
<DateTimePicker
  :enableTime="true"
  :time24hr="true"
  :dateTimeFormat="'d/m/Y, H:i'"
  :placeholder="'Select Date, Time'"
  :width="150"
/>
```

## Grid

```bash
<Grid
  class=""
  isGutter5
  isGutter10
  isGutter15
  isGutter15FixColumnWidth
  isGutter20
  isGutter25
  isGutter30
  isGutter35
  isGutter40
  isGutter45
  isGutter50
  isGutter55
  isGutter60
  isGutterVertical5
  isGutterVertical10
  isGutterVertical15
  isGutterVertical20
  isGutterVertical25
  isGutterVertical30
  isGutterVertical35
  isGutterVertical40
  isGutterVertical45
  isGutterVertical50
  isGutterVertical55
  isGutterVertical60
  isDirectionColumn
  isCenter
  isRight
  isSpacebetween
  isVerticalCenter
  isVerticalBottom
  isFluid
  isNoWrap
>
  <GridCol
    class=""
    isCol1
    isCol2
    isCol3
    isCol4
    isCol5
    isCol6
    isCol7
    isCol8
    isCol9
    isCol10
    isCol11
    isCol12
    isGrow
    isNarrow
  >
    ...
  </GridCol>
</Grid>
```

## Icon

```bash
<Icon
  :size="20"
  :icon="require('~/static/images/icons/ic-reimbursement-blue.svg')"
/>

<Icon
  :isSize="false"
  :width="8"
  :height="5"
  :icon="require('~/static/images/icons/ic-arrow-more-detail.svg')"
/>
```

## ImageRatio

```bash
<ImageRatio
  class=""
  isAction
  isBorderGray
  :src="'https://i.imgur.com/uNUbDaT.png'"
  :alt="'Image'"
  :width="100"
  :widthUnit="'px'"
  :height="57"
  :heightUnit="'%'"
  :borderRadius="10"
  :borderTopRightRadius="10"
  :borderTopLeftRadius="10"
  :borderBottomRightRadius="10"
  :borderBottomLeftRadius="10"
  :borderRadiusUnit="'px'"
  :onClick="function () {}"
/>
```

## Input

```bash
<Input
  class=""
  isMedium
  isFluid
  isError
  isDisabled
  isExceed
  isCost
  isMandatory
  :width="200"
  :type="''"
  :placeholder="''"
  :name="''"
  :value="''"
  :maxLength="255"
  :label="'Label'"
  :message="'Message'"
  :onChangeInput="function () {}"
/>
```

## Layout

```bash
<Layout
  class=""
>
  ...
</Layout>
```

## Pagination

```bash
<Pagination
  :pageCount="5"
  :pageRange="3"
  :marginPages="0"
  :clickHandler="() => {}"
  :prevText="''"
  :nextText="''"
/>
```

## Panel

```bash
<Panel
  isContentPrimary
  isContentSecondary
  isHeadingPrimary
  isHeadingSecondary
  :heading="'Heading'"
>
  ...
</Panel>
```

## PanelCollapse

```bash
<PanelCollapse
  :isOpen="true"
  :heading="'Open Content'"
  :onClickToggleContent="function () {}"
>
  Content here...
</PanelCollapse>
```

## Radio

```bash
<Radio
  isDisabled
  :label="'Disabled'"
  :name="'disabled'"
  :value="false"
/>
```

## Select

```bash
<Select
  class=""
  isSearchable
  isShowLabel
  isFluid
  isBlock
  isMedium
  isError
  isDisabled
  isMandatory
  :width="300"
  :widthUnit="'px'"
  :placeholder="'Select option'"
  :label="'Label'"
  :message="'Message'"
  :noResultMessage="'No search result.'"
/>
```

## Textarea

```bash
<Textarea
  class=""
  isFluid
  isError
  isDisabled
  isMandatory
  :width="200"
  :height="100"
  :placeholder="''"
  :name="''"
  :value="''"
  :characterCounter="255"
  :maxLength="255"
  :label="'Label'"
  :message="'Message'"
  :onChangeInput="function () {}"
/>
```

## Textarea

```bash
<UploadFile
  isMultiple
  isFluid
  isDisabled
  isBlue
  isSmall
  isMedium
  :width="200"
  :iconSrc="'/images/icons/ic-upload-outline-white.svg'"
  :iconTop="0"
  :iconLeft"0"
  :iconWidth"16"
  :iconHeight"16"
  :iconAlt"Icon"
  :label="'Upload File'"
  :textTop="0"
  :name="''"
  :value="''"
  :accept="''"
  :onChangeUploadFile="() => {}"
/>
```
