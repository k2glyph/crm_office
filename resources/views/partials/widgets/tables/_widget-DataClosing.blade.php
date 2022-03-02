
							<!--begin::Card-->
							<div class="card card-xxl-stretch mb-5 mb-xl-8">
								<!--begin::Header-->
								<div class="card-header border-0 pt-5">
									<h3 class="card-title align-items-start flex-column mt-n3">
										<span class="card-label text-white fw-bolder fs-3 mb-1">Order List</span>
									</h3>
									{{-- <audio controls autoplay hidden>
										<source src="assets/notif/notif.mp3" type="audio/mpeg">
									</audio> --}}
									<div class="card-toolbar mt-n3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover">
										<a href=/ld class="btn btn-sm btn-light btn-active-primary me-2 text-hover-white" title="Click For Detail" style="color: #00509d;">
											<!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
											<span class="svg-icon svg-icon-3">
												<i class="fas fa-chart-line" style="color: #00509d;"></i>
											</span>
											<!--end::Svg Icon-->Detail</a>
											<!-- Button trigger modal -->
											<button type="button" class="btn btn-sm btn-light btn-active-primary me-2 text-hover-white" title="Click For Export" data-bs-toggle="modal" data-bs-target="#exampleModal" style="color: #00509d;">
												<!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
												<span class="svg-icon svg-icon-3">
													<i class="las la-print" style="font-size: 18px; color: #00509d;"></i>
												</span>
												<!--end::Svg Icon-->Export</button>

											<!-- Modal -->
										<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
											<div class="modal-dialog">
												<div class="modal-content">

													<form action="" method="GET">
														<div class="modal-header">
															<h5 class="modal-title" id="exampleModalLabel">Export To Excel</h5>
															<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
														</div>
														<div class="modal-body">
															<div class="row align-items-center col-12 pb-5">
																<div class="col-5">
																	<input class="form-control mt-0" name="from_date"  id="from_date" type="date" style="height: 33px;">
																</div>
																<div class="col-2">
																	<h3 class= "text-dark fw-bolder fs-6 pt-3">Until</h3>
																</div>
																<div class="col-5">
																	<input class="form-control mt-0" name="to_date"  id="to_date" type="date" style="height: 33px;">
																</div>
															</div>
														</div>
														<div class="modal-footer">
															<button type="submit" class="btn btn-sm btn-primary btn-active-info me-2" title="Click For Export">
															<!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
															<span class="svg-icon svg-icon-3">
																<i class="las la-print" style="font-size: 18px"></i>
															</span>
															<!--end::Svg Icon-->Export</button>
														</div>
													</form>
												</div>
											</div>
										</div>
										<form action="/" method="GET" class="d-flex">
											<div class="me-2 d-flex flex-row">
												<input class="form-control mt-0 form-control-solid" name="date_filter"  id="date_filter" type="date" style="height: 33px;" onchange="submit()">
											</div>
										</form>
										<!--begin::Search-->
										<div class="d-flex align-items-center position-relative my-1">
											<!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
											<span class="svg-icon svg-icon-1 position-absolute ms-6">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
													<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
												</svg>
											</span>
											<!--end::Svg Icon-->
											<input type="text" data-kt-customer-table-filter="search" class="form-control form-control-solid w-250px ps-15" style="height: 33px;" placeholder="Search Leads" />
										</div>
										<!--end::Search-->
										{{-- <form action="#" method="GET" class="d-flex">
											<input class="form-control mt-0" name="search" id="searchlead" type="text" placeholder="Search" aria-label="Search" style="height: 33px;">
											<button class="btn mt-n2" type="submit" style="height: 30px;"><i class="fas fa-search fas-7x"></i></button>
										</form> --}}
									</div>
								</div>
								<!--end::Header-->
								<!--begin::Card body-->
								<div class="card-body pt-0">
									<!--begin::Table-->
									<table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_customers_table">
										<!--begin::Table head-->
										<thead>
											<!--begin::Table row-->
											<tr class="text-start text-gray-400 fw-bolder fs-8 text-uppercase gs-0">
                                                <th class="min-w-50px">No</th>
												<th class="min-w-100px">Order ID</th>
												<th class="min-w-100px">Advertiser Name</th>
												<th class="min-w-100px">Operator Name</th>
												<th class="min-w-100px">Customer Name</th>
												<th class="min-w-100px">Customer Number</th>
												<th class="min-w-100px">Product Name</th>
												<th class="min-w-100px">Date/Time</th>
												<th class="min-w-50px">Action</th>
											</tr>
											<!--end::Table row-->
										</thead>
										<!--end::Table head-->
										<!--begin::Table body-->
										<tbody class="fw-bold text-gray-600">
                                            <?php
                                                $n=0;
                                            ?>
                                            @foreach ($order as $order)
											<tr>
                                                <td>
													<div class="d-flex align-items-center">
														<h1 class="text-dark fw-normal fs-6">{{$n+=1}}</h1>
													</div>
												</td>
												<td>
													<div class="d-flex align-items-center">
														<h1 class="text-dark fw-normal fs-6">Ord-{{$order['order_id']}}</h1>
													</div>
												</td>
												<td>
													<div class="d-flex align-items-center">
														<h1 class="text-dark fw-normal fs-6">{{$order['advertiser']}}</h1>
													</div>
												</td>
												<td>
													<div class="d-flex align-items-center">
														<h1 class="text-dark fw-normal fs-6">{{$order['operator']}}</h1>
													</div>
												</td>
												<td>
													<div class="d-flex align-items-center">
														<h1 class="text-primary fw-normal fs-6 text-hover-primary">{{$order['customer_name']}}</h1>
													</div>
												</td>
												<td>
													<div class="d-flex align-items-center">
														<h1 class="text-primary fw-normal fs-6 text-hover-primary">{{$order['customer_number']}}</h1>
                                                        {{-- <a class="text-primary fw-normal fs-6 text-hover-primary" href="https://api.whatsapp.com/send/?phone={{$lead->client_wa}}&text={{ rawurlencode(str_replace(array('[cname]', '[cphone]', '[oname]', '[product]'), array($lead->client_name, $lead->client_wa, $lead->operator_name, $lead->product_name), $lead->text)) }}">{{$lead->client_wa}}</a> --}}
													</div>
												</td>
												<td>
													<div class="d-flex align-items-center">
														<h1 class="text-dark fw-normal fs-6">{{$order['product_name']}}</h1>
													</div>
												</td>
												<td>
													<div class="d-flex align-items-center">
														<h1 class="text-dark fw-normal fs-6">{{$order['updated_at']}}</h1>
													</div>
												</td>
                                                <td>
													<div class="d-flex justify-content-end flex-shrink-0" aria-label="Basic outlined example">
														<form action="" method="GET">
															@csrf
															<div class="btn-toolbar justify-content-between px-2" role="toolbar" aria-label="Toolbar with button groups">
																<div class="btn-group" role="group" aria-label="First group">
																	<button type="submit" data-bs-toggle="modal" data-bs-target="#edit-user" title="Click to edit data customer" class="btn btn-primary  btn-icon"><i class="la la-user-edit"></i></button>
																</div>
															</div>
														</form>
													</div>
												</td>
											</tr>
                                            @endforeach
										</tbody>
										<!--end::Table body-->
									</table>
									<!--end::Table-->
								</div>
								<!--end::Card body-->
							</div>
							<!--end::Card-->
