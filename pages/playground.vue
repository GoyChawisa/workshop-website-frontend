<template>
  <div class="playground">
    <Container>
      <div class="playground-section is-heading">
        <div class="playground-text is-heading">Playground</div>
      </div>
      <div class="playground-line is-partition" />

      <!-- Button ================================================== -->
      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Button</div>
      </div>
      <div class="playground-section is-component">
        <div class="playground-lists is-components">
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">Size</div>
            </div>
            <Grid isGutter15 isGutterVertical15>
              <GridCol>
                <Button :onClick="function () {}">Default</Button>
              </GridCol>
              <GridCol>
                <Button isMedium :onClick="function () {}">Medium</Button>
              </GridCol>
              <GridCol>
                <Button isSmall :onClick="function () {}">Small</Button>
              </GridCol>
            </Grid>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">Icon</div>
            </div>
            <Grid isGutter15 isGutterVertical15>
              <GridCol>
                <Button
                  isShowIconFront
                  :iconFrontSrc="'/images/icons/ic-add-circle-outline-white.svg'"
                  :onClick="function () {}"
                >
                  Front Icon
                </Button>
              </GridCol>
              <GridCol>
                <Button
                  isShowIconBack
                  :iconBackSrc="'/images/icons/ic-add-circle-outline-white.svg'"
                  :onClick="function () {}"
                >
                  Back Icon
                </Button>
              </GridCol>
              <GridCol>
                <Button
                  isSmall
                  isShowIconFront
                  :iconFrontSrc="'/images/icons/ic-add-circle-outline-white.svg'"
                  :iconFrontWidth="12"
                  :iconFrontHeight="12"
                  :onClick="function () {}"
                >
                  Customize Front Icon Size
                </Button>
              </GridCol>
              <GridCol>
                <Button
                  isSmall
                  isShowIconBack
                  :iconBackSrc="'/images/icons/ic-add-circle-outline-white.svg'"
                  :iconBackWidth="12"
                  :iconBackHeight="12"
                  :onClick="function () {}"
                >
                  Customize Back Icon Size
                </Button>
              </GridCol>
            </Grid>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">Width</div>
            </div>
            <Grid isGutter15 isGutterVertical15>
              <GridCol>
                <Button :width="150" :onClick="function () {}"
                  >Width 150px</Button
                >
              </GridCol>
              <GridCol isGrow>
                <Button isFluid :onClick="function () {}">Fluid</Button>
              </GridCol>
            </Grid>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">Color</div>
            </div>
            <Grid isGutter15 isGutterVertical15>
              <GridCol>
                <Button isColorGray isTextGray :onClick="function () {}"
                  >Gray</Button
                >
              </GridCol>
              <GridCol>
                <Button isColorBlue :onClick="function () {}">Blue</Button>
              </GridCol>
              <GridCol>
                <Button isColorBlueLight :onClick="function () {}"
                  >Blue Light</Button
                >
              </GridCol>
              <GridCol>
                <Button isColorBlueLightest :onClick="function () {}"
                  >Blue Lightest</Button
                >
              </GridCol>
              <GridCol>
                <Button isColorGreen :onClick="function () {}">Green</Button>
              </GridCol>
              <GridCol>
                <Button isColorGreenLight :onClick="function () {}"
                  >Green Light</Button
                >
              </GridCol>
              <GridCol>
                <Button isColorOrange :onClick="function () {}">Orange</Button>
              </GridCol>
              <GridCol>
                <Button isColorOrangeLight :onClick="function () {}"
                  >Orange Light</Button
                >
              </GridCol>
              <GridCol>
                <Button isColorRed :onClick="function () {}">Red</Button>
              </GridCol>
              <GridCol>
                <Button isColorRedLightest :onClick="function () {}"
                  >Red Lightest</Button
                >
              </GridCol>
            </Grid>
          </div>
        </div>
      </div>
      <div class="playground-line is-partition" />

      <!-- Checkbox ================================================== -->
      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Checkbox</div>
      </div>
      <div class="playground-section is-component">
        <Grid isGutter30>
          <GridCol>
            <div class="playground-section is-heading-variant">
              <span class="playground-text is-heading-variant">Default</span>
            </div>
            <Checkbox :label="'Default'" :name="''" :value="true" />
          </GridCol>
          <GridCol>
            <div class="playground-section is-heading-variant">
              <span class="playground-text is-heading-variant">Disabled</span>
            </div>
            <Checkbox
              isDisabled
              :label="'Disabled'"
              :name="''"
              :value="false"
            />
          </GridCol>
          <GridCol>
            <div class="playground-section is-heading-variant">
              <span class="playground-text is-heading-variant">No Label</span>
            </div>
            <Checkbox :name="''" :value="false" />
          </GridCol>
        </Grid>
      </div>
      <div class="playground-line is-partition" />

      <!-- Date Time Picker ================================================== -->
      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Date Time Picker</div>
      </div>
      <div class="playground-section is-component">
        <div class="playground-lists is-components">
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">General</div>
            </div>
            <Grid isGutter30>
              <GridCol isCol4>
                <DateTimePicker
                  isMandatory
                  :label="'Date & Time'"
                  :placeholder="'Select Date & Time'"
                  :message="'Message'"
                />
              </GridCol>
              <GridCol isCol4>
                <DateTimePicker
                  isMandatory
                  :isEnableTime="false"
                  :dateTimeFormat="'d/m/Y'"
                  :label="'Date Only'"
                  :placeholder="'Select Date'"
                  :message="'Message'"
                />
              </GridCol>
              <GridCol isCol4>
                <DateTimePicker
                  isMandatory
                  :label="'Width'"
                  :placeholder="'Select Date & Time'"
                  :message="'Message'"
                  :width="175"
                />
              </GridCol>
            </Grid>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">State</div>
            </div>
            <Grid isGutter30>
              <GridCol isCol4>
                <DateTimePicker
                  isMandatory
                  isError
                  :label="'Error'"
                  :placeholder="'Select Date & Time'"
                  :message="'Message'"
                />
              </GridCol>
              <GridCol isCol4>
                <DateTimePicker
                  isMandatory
                  isDisabled
                  :label="'Disabled'"
                  :placeholder="'Select Date & Time'"
                  :message="'Message'"
                />
              </GridCol>
            </Grid>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">Size</div>
            </div>
            <Grid isGutter30>
              <GridCol isCol4>
                <DateTimePicker
                  isMandatory
                  isMedium
                  :label="'Medium Size'"
                  :placeholder="'Select Date & Time'"
                  :message="'Message'"
                />
              </GridCol>
            </Grid>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">
                Start Date/Time & End Date/Time
              </div>
            </div>
            <Grid isGutter30>
              <GridCol isCol4>
                <DateTimePicker
                  isMandatory
                  :label="'Start Date/Time'"
                  :placeholder="'Select Start Date/Time'"
                  :message="'Message'"
                  :minDate="dateTime.start.minDate"
                  :maxDate="dateTime.start.maxDate"
                  :onChange="onStartDateTimeChange"
                />
              </GridCol>
              <GridCol isCol4>
                <DateTimePicker
                  isMandatory
                  :label="'End Date/Time'"
                  :placeholder="'Select End Date/Time'"
                  :message="'Message'"
                  :minDate="dateTime.end.minDate"
                  :onChange="onEndDateTimeChange"
                />
              </GridCol>
            </Grid>
          </div>
        </div>
      </div>
      <div class="playground-line is-partition" />

      <!-- Grid ================================================== -->
      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Grid</div>
      </div>
      <div class="playground-section is-component">
        <div class="playground-lists is-components">
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">12 Columns</div>
            </div>
            <Grid isGutter30>
              <GridCol isCol4> Column </GridCol>
              <GridCol isCol4> Column </GridCol>
              <GridCol isCol4> Column </GridCol>
            </Grid>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">Flex</div>
            </div>
            <Grid isGutter30>
              <GridCol> Column </GridCol>
              <GridCol> Column </GridCol>
              <GridCol> Column </GridCol>
            </Grid>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">
                Flex Narrow/Grow
              </div>
            </div>
            <Grid isGutter30>
              <GridCol isNarrow> Narrow Column </GridCol>
              <GridCol isGrow> Grow Column </GridCol>
            </Grid>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">
                Flex Space Between
              </div>
            </div>
            <Grid isGutter30 isSpacebetween>
              <GridCol> Left Column </GridCol>
              <GridCol> Right Column </GridCol>
            </Grid>
          </div>
        </div>
      </div>
      <div class="playground-line is-partition" />

      <!-- Image Ratio ================================================== -->
      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Image Ratio</div>
      </div>
      <div class="playground-section is-component">
        <Grid isGutter30>
          <GridCol isCol6>
            <div class="playground-section is-heading-variant">
              <span class="playground-text is-heading-variant">Ratio</span>
            </div>
            <ImageRatio
              :src="'https://i.imgur.com/uNUbDaT.png'"
              :width="100"
              :widthUnit="'%'"
              :height="57"
              :heightUnit="'%'"
              :borderRadius="5"
              :borderRadiusUnit="'px'"
              :onClick="function () {}"
            />
          </GridCol>
          <GridCol>
            <div class="playground-section is-heading-variant">
              <span class="playground-text is-heading-variant"
                >Fix Width/Height</span
              >
            </div>
            <ImageRatio
              :src="'https://i.imgur.com/uNUbDaT.png'"
              :width="200"
              :widthUnit="'px'"
              :height="113"
              :heightUnit="'px'"
              :borderRadius="5"
              :borderRadiusUnit="'px'"
              :onClick="function () {}"
            />
          </GridCol>
          <GridCol>
            <div class="playground-section is-heading-variant">
              <span class="playground-text is-heading-variant">Circle</span>
            </div>
            <ImageRatio
              isBorderGray
              :src="undefined"
              :width="72"
              :widthUnit="'px'"
              :height="72"
              :heightUnit="'px'"
              :borderRadius="50"
              :borderRadiusUnit="'%'"
              :onClick="function () {}"
            />
          </GridCol>
        </Grid>
      </div>
      <div class="playground-line is-partition" />

      <!-- Input ================================================== -->
      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Input</div>
      </div>
      <div class="playground-section is-component">
        <div class="playground-lists is-components">
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">General</div>
            </div>
            <Grid isGutter30>
              <GridCol>
                <Input
                  isMandatory
                  :width="250"
                  :label="'Default'"
                  :message="'Message'"
                  :placeholder="'Placeholder'"
                  :name="''"
                  :value="''"
                  :onChangeInput="function () {}"
                />
              </GridCol>
              <GridCol>
                <Input
                  isMandatory
                  isError
                  :width="250"
                  :label="'Error'"
                  :message="'Message'"
                  :placeholder="'Placeholder'"
                  :name="''"
                  :value="''"
                  :onChangeInput="function () {}"
                />
              </GridCol>
              <GridCol>
                <Input
                  isMandatory
                  isDisabled
                  :width="250"
                  :label="'Disabled'"
                  :message="'Message'"
                  :placeholder="'Placeholder'"
                  :name="''"
                  :value="''"
                  :onChangeInput="function () {}"
                />
              </GridCol>
            </Grid>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">Size</div>
            </div>
            <Grid isGutter30>
              <GridCol>
                <Input
                  isMandatory
                  isMedium
                  :width="250"
                  :label="'Medium'"
                  :message="'Message'"
                  :placeholder="'Placeholder'"
                  :name="''"
                  :value="''"
                  :onChangeInput="function () {}"
                />
              </GridCol>
              <GridCol isGrow>
                <Input
                  isMandatory
                  isMedium
                  isFluid
                  :label="'Fluid'"
                  :message="'Message'"
                  :placeholder="'Placeholder'"
                  :name="''"
                  :value="''"
                  :onChangeInput="function () {}"
                />
              </GridCol>
            </Grid>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">
                Cost / Cost Disabled / Cost Exceed
              </div>
            </div>
            <Grid isGutter30>
              <GridCol>
                <Input
                  isCost
                  :width="250"
                  :placeholder="'0.00'"
                  :name="''"
                  :value="0.0"
                  :onChangeInput="function () {}"
                />
              </GridCol>
              <GridCol>
                <Input
                  isCost
                  isDisabled
                  :width="250"
                  :placeholder="'0.00'"
                  :name="''"
                  :value="''"
                  :onChangeInput="function () {}"
                />
              </GridCol>
              <GridCol>
                <Input
                  isCost
                  isDisabled
                  isExceed
                  :width="250"
                  :placeholder="'0.00'"
                  :name="''"
                  :value="'0.00'"
                  :onChangeInput="function () {}"
                />
              </GridCol>
            </Grid>
          </div>
        </div>
      </div>
      <div class="playground-line is-partition" />

      <!-- Pagination ================================================== -->
      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Pagination</div>
      </div>
      <div class="playground-section is-component">
        <Pagination
          :pageCount="5"
          :pageRange="3"
          :marginPages="0"
          :clickHandler="() => {}"
        />
      </div>
      <div class="playground-line is-partition" />

      <!-- Panel ================================================== -->
      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Panel</div>
      </div>
      <div class="playground-section is-component">
        <div class="playground-lists is-components">
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">Default</div>
            </div>
            <Panel> ... </Panel>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">
                Primary Content
              </div>
            </div>
            <Panel isContentPrimary> ... </Panel>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">
                Secondary Content
              </div>
            </div>
            <Panel isContentSecondary> ... </Panel>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">
                Tertiary Content
              </div>
            </div>
            <Panel isContentTertiary> ... </Panel>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">
                Primary Heading
              </div>
            </div>
            <Panel isHeadingPrimary :heading="'Heading'"> ... </Panel>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">
                Secondary Heading
              </div>
            </div>
            <Panel isContentSecondary isHeadingSecondary :heading="'Heading'">
              ...
            </Panel>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">
                Tertiary Heading
              </div>
            </div>
            <Panel isContentTertiary isHeadingTertiary :heading="'Heading'">
              ...
            </Panel>
          </div>
        </div>
      </div>
      <div class="playground-line is-partition" />

      <!-- Radio ================================================== -->
      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Radio</div>
      </div>
      <div class="playground-section is-component">
        <Grid isGutter30>
          <GridCol>
            <div class="playground-section is-heading-variant">
              <span class="playground-text is-heading-variant">Default</span>
            </div>
            <Radio :label="'Default'" :name="''" :value="'true'" />
          </GridCol>
          <GridCol>
            <div class="playground-section is-heading-variant">
              <span class="playground-text is-heading-variant">Disabled</span>
            </div>
            <Radio isDisabled :label="'Disabled'" :name="''" :value="'false'" />
          </GridCol>
          <GridCol>
            <div class="playground-section is-heading-variant">
              <span class="playground-text is-heading-variant">No Label</span>
            </div>
            <Radio :name="''" :value="'false'" />
          </GridCol>
        </Grid>
      </div>
      <div class="playground-line is-partition" />

      <!-- Select ================================================== -->
      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Select</div>
      </div>
      <div class="playground-section is-component">
        <div class="playground-lists is-components">
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">General</div>
            </div>
            <Grid isGutter30>
              <GridCol>
                <Select
                  isBlock
                  isMandatory
                  :width="250"
                  :label="'Default'"
                  :placeholder="'Select option'"
                  :message="'Message'"
                />
              </GridCol>
              <GridCol>
                <Select
                  isBlock
                  isMandatory
                  isSearchable
                  :width="250"
                  :label="'Search and Select'"
                  :placeholder="'Type to Search and Select option'"
                  :message="'Message'"
                />
              </GridCol>
              <GridCol>
                <Select
                  isBlock
                  isMandatory
                  isError
                  :width="250"
                  :label="'Error'"
                  :placeholder="'Select option'"
                  :message="'Message'"
                />
              </GridCol>
              <GridCol>
                <Select
                  isBlock
                  isMandatory
                  isDisabled
                  :width="250"
                  :label="'Disabled'"
                  :placeholder="'Select option'"
                  :message="'Message'"
                />
              </GridCol>
            </Grid>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">Size</div>
            </div>
            <Grid isGutter30>
              <GridCol>
                <Select
                  isBlock
                  isMandatory
                  isMedium
                  :width="250"
                  :label="'Medium'"
                  :placeholder="'Select option'"
                  :message="'Message'"
                />
              </GridCol>
              <GridCol isGrow>
                <Select
                  isBlock
                  isMandatory
                  isMedium
                  isFluid
                  :label="'Fluid'"
                  :placeholder="'Select option'"
                  :message="'Message'"
                />
              </GridCol>
              <GridCol isGrow>
                <Select
                  isBlock
                  isMandatory
                  isMedium
                  isFluid
                  isHideArrow
                  isSearchable
                  :label="'Hide Arrow'"
                  :placeholder="'Search and Select'"
                  :message="'Message'"
                />
              </GridCol>
            </Grid>
          </div>
        </div>
      </div>
      <div class="playground-line is-partition" />

      <!-- Table ================================================== -->
      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Table</div>
      </div>
      <div class="playground-section is-component">
        <div class="playground-lists is-components">
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">Default</div>
            </div>
            <Table isStripes class="">
              <THead>
                <TR>
                  <TH isNumber><TInfo isHeading>No.</TInfo></TH>
                  <TH class=""><TInfo isHeading>Table Head</TInfo></TH>
                  <TH isOperations class="is-actions"
                    ><TInfo isHeading>Operations</TInfo></TH
                  >
                </TR>
              </THead>
              <TBody>
                <TR>
                  <TD isNumber><TInfo>1</TInfo></TD>
                  <TD class="">
                    <TInfo>Data</TInfo>
                    <!-- <TInfo
                      :isStatusApproved="true"
                      :isStatusPaid="true"
                      :isStatusActive="true"
                      :isStatusRequestDocument="false"
                      :isStatusOnProcess="false"
                      :isStatusPaymentProcess="false"
                      :isStatusWaitingForApprove="false"
                      :isStatusDraft="false"
                      :isStatusCanceled="false"
                      :isStatusRejected="false"
                      :isStatusTimeout="false"
                      :isStatusInactive="false"
                    >
                      Approved
                    </TInfo> -->
                  </TD>
                  <TD isOperations class="is-actions">
                    <TOperations isButtonGroup>
                      <TInfo>Data</TInfo>
                      <TOperations isViewDetail :onClick="() => {}" />
                      <TOperations isDelete :onClick="() => {}" />
                      <Button isSmall :onClick="function () {}">Small</Button>
                    </TOperations>
                  </TD>
                </TR>
                <TR>
                  <TD isNumber><TInfo>2</TInfo></TD>
                  <TD class=""><TInfo>Data</TInfo></TD>
                  <TD isOperations class="is-actions">
                    <TOperations isButtonGroup>
                      <TInfo>Data</TInfo>
                      <TOperations isViewDetail :onClick="() => {}" />
                      <TOperations isDelete :onClick="() => {}" />
                      <Button isSmall :onClick="function () {}">Small</Button>
                    </TOperations>
                  </TD>
                </TR>
                <TR>
                  <TD isNumber><TInfo>3</TInfo></TD>
                  <TD class=""><TInfo>Data</TInfo></TD>
                  <TD isOperations class="is-actions">
                    <TOperations isButtonGroup>
                      <TInfo>Data</TInfo>
                      <TOperations isViewDetail :onClick="() => {}" />
                      <TOperations isDelete :onClick="() => {}" />
                      <Button isSmall :onClick="function () {}">Small</Button>
                    </TOperations>
                  </TD>
                </TR>
              </TBody>
            </Table>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">
                Collapse content
              </div>
            </div>
            <Table class="">
              <THead>
                <TR>
                  <TH isNumber><TInfo isHeading>No.</TInfo></TH>
                  <TH class=""><TInfo isHeading>Table Head</TInfo></TH>
                  <TH class="is-actions"
                    ><TInfo isHeading>Operations</TInfo></TH
                  >
                  <TH isMoreDetail />
                </TR>
              </THead>
              <TBody :isShowMoreDetail="true">
                <TR>
                  <TD isMoreDetailControl isNumber><TInfo>1</TInfo></TD>
                  <TD isMoreDetailControl class=""><TInfo>Data</TInfo></TD>
                  <TD isMoreDetailControl class="is-actions">
                    <TOperations isButtonGroup>
                      <TInfo>Data</TInfo>
                      <TOperations isViewDetail :onClick="() => {}" />
                      <TOperations isDelete :onClick="() => {}" />
                      <Button isSmall :onClick="function () {}">Small</Button>
                    </TOperations>
                  </TD>
                  <TD isMoreDetailControl isMoreDetail
                    ><TOperations isMoreDetail :onClick="() => {}"
                  /></TD>
                </TR>
                <TR>
                  <TD isMoreDetailContent :colspan="4">
                    <Grid isGutter24>
                      <GridCol>
                        <Grid isGutter8>
                          <GridCol><TInfo isLabel>Label</TInfo></GridCol>
                          <GridCol><TInfo>Data</TInfo></GridCol>
                        </Grid>
                      </GridCol>
                      <GridCol>
                        <Grid isGutter8>
                          <GridCol><TInfo isLabel>Label</TInfo></GridCol>
                          <GridCol><TInfo>Data</TInfo></GridCol>
                        </Grid>
                      </GridCol>
                    </Grid>
                  </TD>
                </TR>
              </TBody>
              <TBody :isShowMoreDetail="false">
                <TR>
                  <TD isMoreDetailControl isNumber><TInfo>2</TInfo></TD>
                  <TD isMoreDetailControl class=""><TInfo>Data</TInfo></TD>
                  <TD isMoreDetailControl class="is-actions">
                    <TOperations isButtonGroup>
                      <TInfo>Data</TInfo>
                      <TOperations isViewDetail :onClick="() => {}" />
                      <TOperations isDelete :onClick="() => {}" />
                      <Button isSmall :onClick="function () {}">Small</Button>
                    </TOperations>
                  </TD>
                  <TD isMoreDetailControl isMoreDetail
                    ><TOperations isMoreDetail :onClick="() => {}"
                  /></TD>
                </TR>
                <TR>
                  <TD isMoreDetailContent :colspan="4">
                    <Grid isGutter24>
                      <GridCol>
                        <Grid isGutter8>
                          <GridCol><TInfo isLabel>Label</TInfo></GridCol>
                          <GridCol><TInfo>Data</TInfo></GridCol>
                        </Grid>
                      </GridCol>
                      <GridCol>
                        <Grid isGutter8>
                          <GridCol><TInfo isLabel>Label</TInfo></GridCol>
                          <GridCol><TInfo>Data</TInfo></GridCol>
                        </Grid>
                      </GridCol>
                    </Grid>
                  </TD>
                </TR>
              </TBody>
              <TBody :isShowMoreDetail="false">
                <TR>
                  <TD isMoreDetailControl isNumber><TInfo>3</TInfo></TD>
                  <TD isMoreDetailControl class=""><TInfo>Data</TInfo></TD>
                  <TD isMoreDetailControl class="is-actions">
                    <TOperations isButtonGroup>
                      <TInfo>Data</TInfo>
                      <TOperations isViewDetail :onClick="() => {}" />
                      <TOperations isDelete :onClick="() => {}" />
                      <Button isSmall :onClick="function () {}">Small</Button>
                    </TOperations>
                  </TD>
                  <TD isMoreDetailControl isMoreDetail
                    ><TOperations isMoreDetail :onClick="() => {}"
                  /></TD>
                </TR>
                <TR>
                  <TD isMoreDetailContent :colspan="4">
                    <Grid isGutter24>
                      <GridCol>
                        <Grid isGutter8>
                          <GridCol><TInfo isLabel>Label</TInfo></GridCol>
                          <GridCol><TInfo>Data</TInfo></GridCol>
                        </Grid>
                      </GridCol>
                      <GridCol>
                        <Grid isGutter8>
                          <GridCol><TInfo isLabel>Label</TInfo></GridCol>
                          <GridCol><TInfo>Data</TInfo></GridCol>
                        </Grid>
                      </GridCol>
                    </Grid>
                  </TD>
                </TR>
              </TBody>
            </Table>
          </div>
        </div>
      </div>
      <div class="playground-line is-partition" />

      <!-- Template ================================================== -->
      <!-- <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Template</div>
      </div>
      <div class="playground-section is-component">
        Component

        <Grid isGutter30>
          <GridCol>
            <div class="playground-section is-heading-variant">
              <span class="playground-text is-heading-variant">Ratio</span>
            </div>
            Component
          </GridCol>
        </Grid>

        <div class="playground-lists is-components">
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">XXXXX</div>
            </div>
            <Grid isGutter30>
              <GridCol>
                Component
              </GridCol>
            </Grid>
          </div>
        </div>
      </div>
      <div class="playground-line is-partition" /> -->
    </Container>
  </div>
</template>

<script>
import Components from '~/components/index.ts';

export default {
  layout: 'blank',

  components: {
    ...Components,
  },

  data() {
    return {
      dateTime: {
        start: {
          minDate: null,
          maxDate: null,
        },
        end: {
          minDate: null,
        },
      },
    };
  },

  methods: {
    onStartDateTimeChange(selectedDates, dateStr, instance) {
      this.dateTime.end.minDate = dateStr;
    },
    onEndDateTimeChange(selectedDates, dateStr, instance) {
      this.dateTime.start.maxDate = dateStr;
    },
  },
};
</script>

<style lang="scss">
@import '~assets/styleguides/styleguides';

.playground {
  /* Parent style   ------------------------------ */

  /* Children style ------------------------------ */
  .playground-section {
    &.is-heading {
      margin: 0 0 56px;
    }

    &.is-heading-component {
      margin: 0 0 15px;
    }

    &.is-heading-variant {
      margin: 0 0 16px;
    }

    &.is-component {
      margin: 0 0 48px;
    }
  }

  .playground-lists {
    &.is-components {
      .playground-list {
        margin: 0 0 15px;

        &:last-child {
          margin: 0;
        }
      }
    }
  }

  .playground-text {
    &.is-heading {
      @include typography-primary-base;
      font-family: $font-family-primary-bold;
      font-size: 30px;
      color: $color-black;
    }

    &.is-heading-component {
      @include typography-primary-bold-22;
      color: $color-black;
    }

    &.is-heading-variant {
      @include typography-primary-semibold-16;
      color: $color-black;
    }
  }

  .playground-line {
    &.is-partition {
      margin: 0 0 48px;
      border-bottom: 1px solid $color-gray-1;
    }
  }

  /* Other component style ----------------------- */
}
</style>
